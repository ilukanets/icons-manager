//Install express server
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PATCH, PUT, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  next();
});

// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname, '../dist/icons-manager')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/icons-manager/index.html'));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  const error = req.app.get('env') === 'development' ? err : null;

  // render the error page
  res.status(err.status || 500).json({
    message: err.message,
    status: err.status,
    error: error
  });
});

const generateIconImage = (data, type) => {
  try {
    const code = data.code[type] || data.code['baseline'];
    let svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px"><path d="M0 0h24v24H0V0z" fill="none"/>'

    svg += code.transparent ? code.transparent.replace('/>', ' opacity=".3"/>') : '';
    svg += code.opaque || '';
    svg += '</svg>';

    fs.writeFileSync(path.join(__dirname, 'public/icons', type, `${data.name}.svg`), svg, (err) => {
      if (err) console.log(err);
    });
  }
  catch (e) {
    console.log(e);
  }
}

const beforeStart = async (cb) => {
  try {
    const svgData = await fs.promises.readFile(path.join(__dirname, '../node_modules/@material-icons/svg/data.json'));
    const fontData = await fs.promises.readFile(path.join(__dirname, '../node_modules/@material-icons/font/data.json'));
    const icons = JSON.parse(svgData).icons;
    const fontIcons = JSON.parse(fontData).icons;
    const data = {
      types: ['baseline', 'outline', 'round', 'sharp', 'twotone'],
      icons: []
    };

    await fs.promises.mkdir(path.join(__dirname, 'public'), { recursive: true });
    await fs.promises.mkdir(path.join(__dirname, 'public/icons'), { recursive: true });

    for (const type of data.types) {
      try {
        await fs.promises.mkdir(path.join(__dirname, 'public/icons', type), { recursive: true });
      } catch (e) {
        console.log(e);
      }
    }

    await icons.forEach((item) => {
      const fontData = fontIcons.find((icon) => {
        return icon.name === item.name;
      });

      const icon = {
        name: item.name,
        tags: item.tags || [],
        category: item.categories[0],
        twotone: fontData.twotone,
        char: {
          opaque: fontData.char.opaque.toString(16),
          transparent: fontData.twotone ? fontData.char.transparent.toString(16) : ''
        }
      };

      data.types.forEach((type) => {
        generateIconImage(fontData, type);
      });

      data.icons.push(icon);
    });

    await fs.promises.writeFile(path.join(__dirname, 'public/data.json'), JSON.stringify(data));
  }
  catch (e) {
    console.log(e);
  }
};

// Start the app by listening on the default Heroku port

app.listen(process.env.PORT || 8080, async () => {
  await beforeStart();

  console.log('Server is running');
});
