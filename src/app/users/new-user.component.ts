import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { Router, ROUTER_DIRECTIVES} from '@angular/router';
import { FormBuilder, ControlGroup, Validators} from '@angular/common';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { PolymerElement } from '@vaadin/angular2-polymer';
//import { UPLOAD_DIRECTIVES} from 'ng2-uploader/ng2-uploader';

import {BasicValidators} from '../services/basicValidators';

@Component({
  moduleId: module.id,
  selector: 'formular',
  templateUrl : 'new-user.component.html',
  directives: [ROUTER_DIRECTIVES, 
               MD_BUTTON_DIRECTIVES, 
               PolymerElement('vaadin-upload'),
               PolymerElement('vaadin-date-picker'),
               PolymerElement('vaadin-combo-box'),
               ],
  styleUrls: ['users.component.css']
})

export class NewUserComponent {
    selectedSsso = '';
    Sesso = ['M', 'F'];
    selectedLivelloLingua = '';
    livelloLingua = ['Low', 'Medium', 'High' ,'Native'];

  dateValue:string;
  form: ControlGroup ;
  users: FirebaseListObservable<any>;

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
    this.users = af.database.list('/hr/users')
   }

  addField(newName: string, 
           newEmail: string, 
           newOra: string,
           newEta: string,
           newSesso: string,
           newLivelloLingua: string,
           newData: string
           ){
            this.users.push({ 
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

  // uploadFile: any;
  // options: Object = {
  //   url: 'http://localhost:10050/upload',
  //   //fieldName: 'logo'   
  // };
  
  // handleUpload(data) : void{
  //   if (data && data.response){
  //     data = JSON.parse(data.response);
  //     this.uploadFile = data;
  //     //console.log( uploadFile);
  //   }
  //}
}