import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth/auth.guard';

import { CoreComponent } from './components/core/core.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const coreRoutes: Routes = [
  // {
    // path: '',
    // redirectTo: 'login'
    // component: HomeComponent
  // },
  {
    path: '',
    component: CoreComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      }
    ]
  },
  {
    path: '404',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(coreRoutes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class CoreRoutingModule {
}
