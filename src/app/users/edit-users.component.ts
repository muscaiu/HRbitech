import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable , FirebaseListObservable } from 'angularfire2';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {UserService} from './user.service';
import {SpinnerComponent} from './spinner.component'
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
  moduleId: module.id,
  templateUrl: './edit-users.component.html', 
  directives: [ROUTER_DIRECTIVES, SpinnerComponent, MD_BUTTON_DIRECTIVES],
  providers: [UserService],
  styleUrls: ['users.component.css']
})
export class EditUsersComponent implements OnInit{
    users: FirebaseListObservable<any>;
    loadingLista = true;

    constructor(private _userService: UserService) {
    }

      ngOnInit(){
          this.users = this._userService.getUsers();
          // .subscribe(
          //   x => this.items = x,
          //   this.loadingLista = false
          // )
      }

  update(key: string, 
         newName: string, 
         newEmail: string, 
         newEta: string,
         newSesso: string,
         newLivelloLingua: string,
         newData:string,
         newOra: string) {
            this.users.update(
              key, 
              { 
              name: newName, 
              email: newEmail,
              eta: newEta,
              sesso: newSesso,
              livellolingua: newLivelloLingua,
              data: newData,
              ora: newOra
            });
  }

  deleteUser(key: string) {    
    if(confirm("Are u sure u want to delete "+ key + " ?")){
      this.users.remove(key)
        // .subscribe(null, err =>{
        //     alert("Could not delete user.")
        // }) 
    }
  }
}
