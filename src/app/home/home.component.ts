import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    Home component ... 
    <ng-content select=".body1"></ng-content>
    <ng-content select=".body2"></ng-content>
  `
})
export class HomeComponent {

}
