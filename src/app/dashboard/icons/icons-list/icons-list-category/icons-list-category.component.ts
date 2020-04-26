import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icons-list-category',
  templateUrl: './icons-list-category.component.html',
  styleUrls: ['./icons-list-category.component.scss']
})
export class IconsListCategoryComponent {
  @Input() categoryName: string;

  constructor() { }
}
