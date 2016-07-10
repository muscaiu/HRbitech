import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable , FirebaseListObservable } from 'angularfire2';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { SpinnerComponent } from './spinner.component'
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { SummaryPipe } from './summary-pipe';
import { UsersService } from './users.service';

@Component({
  moduleId: module.id,
  selector: 'firebase-list',
  templateUrl: './users.component.html', 
  directives: [ROUTER_DIRECTIVES, SpinnerComponent, MD_BUTTON_DIRECTIVES],
  styleUrls: ['users.component.css'],
  pipes: [SummaryPipe],
  providers: [UsersService]
})
export class UsersComponent implements OnInit{
    //users: FirebaseListObservable<any>;
    users: any;
    loadingLista = true;

    constructor(private _af: AngularFire, 
                private _usersService: UsersService ) {
    }

    ngOnInit(){
      this.users = this._usersService.getUsers();
      
      // this._usersService.getUsers()
      //     .subscribe(
      //       result => {
      //         this.users = result;
      //         this.loadingLista = false;
      //       }
      //     )
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
