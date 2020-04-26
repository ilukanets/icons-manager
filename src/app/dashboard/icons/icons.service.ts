import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { take } from 'rxjs/operators';

const DATA_URL = environment.serverUrl + 'data.json';

export interface Icon {
  name: string;
  tags: string[];
  category: string;
  twotone: boolean;
  char: {
    opaque?: string;
    transparent?: string;
  };
}

@Injectable({ providedIn: 'root' })
export class IconsService {
  dataLoaded = false;
  loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  types: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(null);
  categories: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(null);
  icons: BehaviorSubject<Icon[]> = new BehaviorSubject<Icon[]>(null);
  search: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  selectedIcon: BehaviorSubject<Icon> = new BehaviorSubject<Icon>(null);
  selectedType: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.pipe(take(1)).subscribe((params: Params) => {
      if (!this.dataLoaded) {
        this.getData(params);
      }

      this.search.next(params.search || '');
      this.selectedType.next(params.type || 'baseline');
    });
  }


  setType(type: string) {
    this.selectedType.next(type);
    this.updateRoute('type', type !== 'baseline' ? type : null);
  }

  setSearch(value: string) {
    this.search.next(value);
    this.updateRoute('search', value || null);
  }

  setIcon(icon: Icon) {
    this.selectedIcon.next(icon || null);
    this.updateRoute('name', (icon && icon.name) ? icon.name : null);
  }

  private getData(params: Params) {
    this.dataLoaded = true;

    this.http.get(DATA_URL).subscribe(
      (data: { types: string[], icons: Icon[] }) => {
        const categories = [];
        if (data) {

          if (data.types) {
            this.types.next(data.types);
          }

          if (data.icons) {
            data.icons.forEach((icon: Icon) => {
              if (!categories.includes(icon.category)) {
                categories.push(icon.category);
              }
            });

            this.categories.next(categories);
            this.icons.next(data.icons);

            if (params.name) {
              this.selectedIcon.next(data.icons.filter(icon => icon.name === params.name)[0] || null);
            }
          }

          this.loading.next(true);
        }
      }
    );
  }

  private updateRoute(type: string, value: string) {
    const queryParams: Params = {};

    queryParams[type] = value || null;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams,
      queryParamsHandling: 'merge', // remove to replace all query params by provided
    });
  }
}
