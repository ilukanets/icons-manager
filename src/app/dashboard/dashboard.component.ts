import { Component, OnInit } from '@angular/core';
import { IconsService } from './icons/icons.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  iconsLoaded: Observable<boolean>;

  constructor(private iconsService: IconsService) {}

  ngOnInit() {
    this.iconsLoaded = this.iconsService.loading;
  }

}
