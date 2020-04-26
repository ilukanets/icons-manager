import { Component, OnInit } from '@angular/core';
import { Icon, IconsService } from '../icons.service';
import { environment } from '../../../../environments/environment';

const serverUrl = environment.serverUrl;

@Component({
  selector: 'app-selected-icon-info',
  templateUrl: './selected-icon-info.component.html',
  styleUrls: ['./selected-icon-info.component.scss']
})
export class SelectedIconInfoComponent implements OnInit {
  icon: Icon;
  type: string;

  constructor(private iconsService: IconsService) {}

  ngOnInit(): void {
    this.iconsService.selectedIcon.subscribe((icon: Icon) => {
      this.icon = icon;
    });

    this.iconsService.selectedType.subscribe((type: string) => {
      this.type = type;
    });
  }

  getImageUrl() {
    return `${serverUrl}icons/${this.type}/${this.icon.name}.svg`;
  }

  getIconCode() {
    return `<i class="md-icon md-${this.icon.name}" aria-hidden="true"></i>`;
  }

  copyContent(value: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = value;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  onSelectTag(tag: string) {
    this.iconsService.setSearch(tag);
  }
}
