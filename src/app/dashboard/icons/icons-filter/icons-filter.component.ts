import { Component, OnInit } from '@angular/core';
import { IconsService } from '../icons.service';

@Component({
  selector: 'app-icons-filter',
  templateUrl: './icons-filter.component.html',
  styleUrls: ['./icons-filter.component.scss']
})
export class IconsFilterComponent implements OnInit {
  types: string[];
  type: string;
  search: string;

  constructor(private iconsService: IconsService) {}

  ngOnInit() {
    this.iconsService.types.subscribe((types: string[]) => {
      this.types = types;
    });

    this.iconsService.selectedType.subscribe((type: string) => {
      this.type = type;
    });

    this.iconsService.search.subscribe((search: string) => {
      this.search = search;
    });
  }

  onSearch(clear: boolean = false) {
    if (clear === true) {
      this.search = '';
    }

    this.iconsService.setSearch(this.search);
  }

  onTypeChange() {
    this.iconsService.setType(this.type);
  }
}
