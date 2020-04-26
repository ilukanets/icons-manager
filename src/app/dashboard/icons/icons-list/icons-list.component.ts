import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Icon, IconsService } from '../icons.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-icons-list',
  templateUrl: './icons-list.component.html',
  styleUrls: ['./icons-list.component.scss']
})
export class IconsListComponent implements OnInit {
  categories: string[];
  icons: Icon[];
  search: string;
  type: string;

  constructor(private iconsService: IconsService) {}

  ngOnInit() {
    this.iconsService.icons.subscribe((icons: Icon[]) => {
      this.icons = icons;
    });

    this.iconsService.categories.subscribe((categories: string[]) => {
      this.categories = categories;
    });

    this.iconsService.selectedType.subscribe(type => {
      this.type = type;
    });

    this.iconsService.search
      .pipe(debounceTime(300))
      .subscribe(search => {
        this.search = search;
      });
  }

}
