import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

const DATA_URL = 'https://raw.githubusercontent.com/material-icons/material-icons-font/master/data.json';

@Injectable({providedIn: 'root'})
export class IconsService {
  icons: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(null);

  constructor(private http: HttpClient) {
    this.getData();
  }

  getData() {
    this.http.get(DATA_URL).subscribe(
      (data: any) => {
        if (data.icons) {
          this.icons.next(data.icons);
        }
      }
    );
  }
}
