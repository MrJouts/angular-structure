import { IconServiceService } from './../../../shared/services/icon-service.service';
import { Component, OnInit } from '@angular/core';
IconServiceService
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private iconService: IconServiceService) {}

  ngOnInit() {
    this.iconService.registerIcons();
  }

}
