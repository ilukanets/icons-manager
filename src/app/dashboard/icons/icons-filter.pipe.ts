import { Pipe, PipeTransform } from '@angular/core';
import { Icon } from './icons.service';

@Pipe({
  name: 'iconsFilter'
})
export class IconsFilterPipe implements PipeTransform {

  transform(icons: Icon[], category: string, name: string = ''): Icon[] {
    return icons.filter(icon => {
      let searchString = icon.name;

      if (name && icon.tags.length) {
        searchString = [searchString].concat(icon.tags).join(',');
      }

      if (icon.char) {
        if (icon.char.opaque) {
          searchString = [searchString].concat(icon.char.opaque).join(',');
        }

        if (icon.char.transparent) {
          searchString = [searchString].concat(icon.char.transparent).join(',');
        }
      }

      return icon.category === category && (name ? searchString.indexOf(name) !== -1 : true);
    });
  }
}
