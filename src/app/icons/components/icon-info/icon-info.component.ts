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

  constructor() { }

  ngOnInit(): void {}

  getImageUrl() {
    return `${serverUrl}icons/outline/${this.icon.name}.svg`;
  }

  getIconCode() {
    return `<i class="md-icon md-${this.icon.name}" aria-hidden="true"></i>`;
  }
}
