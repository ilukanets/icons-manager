import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IconsService} from '../../icons.service';

@Component({
  selector: 'app-icons-list',
  templateUrl: './icons-list.component.html',
  styleUrls: ['./icons-list.component.scss']
})
export class IconsListComponent implements OnInit {
  icons: any[];
  selectedIconName: string;

  @Input() search: string;
  @Output() selectedIcon: EventEmitter<any> = new EventEmitter<any>();

  constructor(private iconsService: IconsService) {}

  ngOnInit(): void {
    this.iconsService.icons.subscribe(
      (icons: any[]) => {
        console.log(icons);
        this.icons = icons;
      }
    );
  }

  getIcons() {
    if (!this.search) {
      return this.icons;
    }

    return this.icons.filter(icon => {
      return icon.name.indexOf(this.search) !== -1;
    });
  }

  onIconSelected(icon) {
    if (this.selectedIconName === icon.name) {
      icon = null;
    }

    this.selectedIconName = icon ? icon.name : null;
    this.selectedIcon.emit(icon);
  }
}
