import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';

const serverUrl = environment.serverUrl;

@Component({
  selector: 'app-icon-info',
  templateUrl: './icon-info.component.html',
  styleUrls: ['./icon-info.component.scss']
})
export class IconInfoComponent implements OnInit {
  @Input() icon: any;
  @Input() type: string;

  constructor() { }

  ngOnInit(): void {}

  getImageUrl() {
    return `${serverUrl}icons/${this.type}/${this.icon.name}.svg`;
  }

  getIconCode() {
    return `<i class="md-icon md-${this.icon.name}" aria-hidden="true"></i>`;
  }
}
