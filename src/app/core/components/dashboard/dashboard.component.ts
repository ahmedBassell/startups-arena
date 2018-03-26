import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserService } from '../../services/user/user.service';
import { LookupsService } from '../../services/lookups/lookups.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  serviceProviders;
  currentServiceProvider;
  constructor(private lookupsService: LookupsService) { }

  ngOnInit() {
    this.serviceProviders = this.lookupsService.getServiceProviders();
    this.currentServiceProvider = this.lookupsService.getCurrentServiceProvider();
  }

  handleServiceProviderClick(id: number) {
    if(this.currentServiceProvider.id === id) return;
  }
}
