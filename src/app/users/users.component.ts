import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable , FirebaseListObservable } from 'angularfire2';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {HTTP_PROVIDERS, Http, Response} from '@angular/http';
import { PolymerElement } from '@vaadin/angular2-polymer';
import {Observable} from 'rxjs/observable';

import { SpinnerComponent } from './spinner.component'
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { SummaryPipe } from './summary-pipe';
import { UsersService } from './users.service';

class Person {
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  moduleId: module.id,
  selector: 'firebase-list',
  templateUrl: './users.component.html', 
  directives: [ROUTER_DIRECTIVES, 
              SpinnerComponent, 
              MD_BUTTON_DIRECTIVES, 
              PolymerElement('vaadin-grid')],
  styleUrls: ['users.component.css'],
  pipes: [SummaryPipe],
  providers: [UsersService, HTTP_PROVIDERS]
})
export class UsersComponent implements OnInit{

    people: Person[] = [];

    //users: FirebaseListObservable<any>;
    users: any;
    loadingLista = true;

    constructor(private _af: AngularFire, 
                private _usersService: UsersService,
                private http: Http ) {
    }
    ngOnInit(){
      this.users = this._usersService.getUsers();

      this.getPeople();

      // this._usersService.getUsers()
      //     .subscribe(
      //       result => {
      //         this.users = result;
      //         this.loadingLista = false;
      //       }
      //     )
    }
    getPeople(){
        this._getJSON('https://demo.vaadin.com/demo-data/1.0/people')
          .subscribe(json => this.people = json.result)
      }
    _getJSON(url: string): Observable<any>{
        return this.http.get(url)
          .map((res: Response) => res.json())
      }

    deleteUser(key: string) {    
      if(confirm("Are u sure u want to delete "+ key + " ?")){
        this.users.remove(key)
          .subscribe(null, err =>{
              alert("Could not delete user.")
          }) 
      }
    }
}
