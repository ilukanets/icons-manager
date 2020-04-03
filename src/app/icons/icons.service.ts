import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {environment} from '../../environments/environment';

const DATA_URL = environment.serverUrl + 'data.json';

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
