import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IconsService} from '../../icons.service';

@Component({
  selector: 'app-icons-list',
  templateUrl: './icons-list.component.html',
  styleUrls: ['./icons-list.component.scss']
})
export class IconsListComponent implements OnInit {
  icons: any[];

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

  onIconSelected(icon, index) {
    console.log(index);
    this.selectedIcon.emit(icon);
  }
}
