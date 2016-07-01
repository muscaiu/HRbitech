import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {NavbarComponent} from './navbar/navbar.component';

@Component({
  //moduleId: module.id,
  selector: 'app-root',
  template: `
<navbar></navbar>
<router-outlet></router-outlet>
`,
  directives: [ROUTER_DIRECTIVES, NavbarComponent]
})

export class AppComponent {
  
} 
