import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { Router, ROUTER_DIRECTIVES} from '@angular/router';
import { FormBuilder, ControlGroup, Validators} from '@angular/common';

import {BasicValidators} from '../services/basicValidators';

@Component({
  moduleId: module.id,
  selector: 'formular',
  templateUrl : 'new-user.component.html',
  directives: [ROUTER_DIRECTIVES],
  styleUrls: ['users.component.css']
})

export class NewUserComponent {
  dateValue:string;
  form: ControlGroup ;
  items: FirebaseListObservable<any>;

  constructor(af: AngularFire, 
              private _router: Router,
              fb:FormBuilder
              ) { 
    this.form = fb.group({
        newName:['', Validators.required], 
        newEmail:['', BasicValidators.email], 
        newOra:[],
        newEta:[], 
        newSesso:[], 
        newLivelloLingua:[], 
        newData:[] 
    })
    this.items = af.database.list('/hr/users')
   }

  addField(newName: string, 
           newEmail: string, 
           newOra: string,
           newEta: string,
           newSesso: string,
           newLivelloLingua: string,
           newData: string
           ){
            this.items.push({ 
              name: newName,
              email: newEmail,
              ora: newOra,
              eta: newEta,
              sesso: newSesso,
              livellolingua: newLivelloLingua,
              data: newData,
          })
          this._router.navigate(['/users'])
  }
}