import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-info',
  templateUrl: './icon-info.component.html',
  styleUrls: ['./icon-info.component.scss']
})
export class IconInfoComponent implements OnInit {
  @Input() icon: any;

  constructor() { }

  ngOnInit(): void {}

  getImageUrl() {
    return `https://material-icons.github.io/material-icons/svg/${this.icon.name}/outline.svg`;
  }

  getIconCode() {
    return `<i class="md-icon md-${this.icon.name}" aria-hidden="true"></i>`;
  }
}
