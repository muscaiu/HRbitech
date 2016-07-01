import { provideRouter, RouterConfig } from '@angular/router';

import {UsersComponent} from './users/users.component';
import {EditUsersComponent} from './users/edit-users.component';
import {NewUserComponent} from './users/new-user.component';
import {MdcomponentsComponent} from './mdcomponents/mdcomponents.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {ReportsComponent} from './reports/reports.component';
import {AuthGuard} from './navbar/auth.guard';

export const routes: RouterConfig = [
   { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },   
   { path: 'users/edit', component: EditUsersComponent },   
   { path: 'users/new', component: NewUserComponent },    
   { path: 'statistics', component: StatisticsComponent },    
   { path: 'reports', component: ReportsComponent },    
   { path: 'mdcomponents', component: MdcomponentsComponent },    
   //{ path: '/ss', redirectTo: '/users'},       
//   { path: 'hero/:id', component: HeroDetailComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  AuthGuard
];