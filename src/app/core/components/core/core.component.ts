import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user/user.service';
import { LookupsService } from '../../services/lookups/lookups.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
  currentUser;
  currentEntity;
  currentServiceProvider;
  serviceProviders;

  constructor(private lookupsService: LookupsService,
    private userService: UserService) { }

  ngOnInit() {
  }
}
