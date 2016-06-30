import { provideRouter, RouterConfig } from '@angular/router';

import {UsersComponent} from './users/users.component';
import {NewUserComponent} from './users/new-user.component';
import {AuthGuard} from './navbar/auth.guard';

export const routes: RouterConfig = [
   { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },   
   { path: 'users/new', component: NewUserComponent },    
   //{ path: '/ss', redirectTo: '/users'},       
//   { path: 'hero/:id', component: HeroDetailComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  AuthGuard
];