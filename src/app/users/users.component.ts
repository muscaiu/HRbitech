import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable , FirebaseListObservable } from 'angularfire2';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {SpinnerComponent} from './spinner.component'

@Component({
  moduleId: module.id,
  selector: 'firebase-list',
  templateUrl: './users.component.html' 
  , directives: [ROUTER_DIRECTIVES, SpinnerComponent] 
})
export class UsersComponent implements OnInit{
  items: FirebaseListObservable<any>;
  loadingLista = true;

  constructor(af: AngularFire) {
    this.items = af.database.list('/hr/users');
    //this.loadingLista = false;
  }

  ngOnInit(){
    //this.loadingLista = false;
  }

  update(key: string, newName: string, newEmail: string) {
    this.items.update(key, { name: newName, email: newEmail });
  }

  deleteItem(key: string) {    
    this.items.remove(key); 
  }
}
