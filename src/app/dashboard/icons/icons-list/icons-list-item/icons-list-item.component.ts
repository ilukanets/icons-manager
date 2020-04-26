import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { Icon, IconsService } from '../../icons.service';

@Component({
  selector: 'app-icons-list-item',
  templateUrl: './icons-list-item.component.html',
  styleUrls: ['./icons-list-item.component.scss']
})
export class IconsListItemComponent implements OnInit {
  @Input() icon: Icon;
  @Input() type: string;

  @HostBinding('class.selected') isSelected: boolean;

  @HostListener('click')
  onClick() {
    this.iconsService.setIcon(this.isSelected ? null : this.icon);
  }

  constructor(private iconsService: IconsService) {}

  ngOnInit() {
    this.iconsService.selectedIcon.subscribe((icon: Icon) => {
      this.isSelected = !!(icon && icon.name === this.icon.name);
    });
  }

  getClassName() {
    let className = 'icon md-' + this.icon.name + ' material-icons';

    className += (!this.type || this.type === 'baseline') ? ''  : '-' + this.type;

    return className;
  }
}
