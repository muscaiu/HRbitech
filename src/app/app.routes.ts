import { provideRouter, RouterConfig } from '@angular/router';

import {UsersComponent} from './users/users.component';
import {EditUsersComponent} from './users/edit-users.component';
import {NewUserComponent} from './users/new-user.component';
import {MdcomponentsComponent} from './mdcomponents/mdcomponents.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {ReportsComponent} from './reports/reports.component';
import {ToDoComponent} from './todo/todo.component';
import {AuthGuard} from './auth.guard';

export const routes: RouterConfig = [
   { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },   
   { path: 'users/edit', component: EditUsersComponent, canActivate: [AuthGuard]  },   
   { path: 'users/new', component: NewUserComponent, canActivate: [AuthGuard]  },    
   { path: 'statistics', component: StatisticsComponent, canActivate: [AuthGuard]  },    
   { path: 'reports', component: ReportsComponent, canActivate: [AuthGuard]  },    
   { path: 'mdcomponents', component: MdcomponentsComponent },      
   { path: 'todo', component: ToDoComponent },      
   //{ path: '**', component: App }, 
   //{ path: '/ss', redirectTo: '/users'},       
//   { path: 'hero/:id', component: HeroDetailComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  AuthGuard
];