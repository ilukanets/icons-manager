import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() icon: any;
  @Input() type: string;
  @Input() selected = false;

  constructor() {}

  ngOnInit(): void {}
}
