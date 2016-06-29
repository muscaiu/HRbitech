import { provideRouter, RouterConfig } from '@angular/router';

import {UsersComponent} from './users/users.component';
import {NewUserComponent} from './users/new-user.component';

export const routes: RouterConfig = [
   { path: 'users', component: UsersComponent },   
   { path: 'users/new', component: NewUserComponent },           
   //{ path: 'profile', component: Profile },         
//   { path: 'heroes', component: HeroListComponent },
//   { path: 'hero/:id', component: HeroDetailComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];