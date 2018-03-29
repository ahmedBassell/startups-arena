import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreRoutingModule } from './core-routing.module';

import { TokenInterceptor } from './interceptors/token.interceptor';

import { LookupsService } from './services/lookups/lookups.service';
import { UserService } from './services/user/user.service';
import { GameService } from './services/games/game.service';


import { CoreComponent } from './components/core/core.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CreatMatchComponent } from './creat-match/creat-match.component';

@NgModule({
  declarations: [
    CoreComponent,
    NotFoundComponent,
    DashboardComponent,
    HomeComponent,
    CreatMatchComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    LookupsService,
    UserService,
    GameService
  ]
})
export class CoreModule { }
