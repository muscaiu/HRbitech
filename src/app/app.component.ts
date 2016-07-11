import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { tokenNotExpired, JwtHelper} from 'angular2-jwt';

import {HomeComponent } from './home/home.component';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

declare var Auth0Lock;

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  directives: [ROUTER_DIRECTIVES, HomeComponent, MD_BUTTON_DIRECTIVES]
})

export class AppComponent {
  lock = new Auth0Lock('9wy0lBjMWP5oi7irUcdjByrxCvm1uQqC','muscaiuuu.eu.auth0.com')
  jwtHelper: JwtHelper = new JwtHelper();
  profile : any;

  constructor(){
    this.profile = JSON.parse(localStorage.getItem('profile'));
    // this.lock.on("authenticated", (authResult) => {
    //     localStorage.setItem('id_token', authResult.idToken);
    //  });
  }
  
  login(){
    var self = this;

    this.lock.show((err: string, profile: string, id_token: string) =>{
      if (err){
        throw new Error(err);
      }

      localStorage.setItem('profile', JSON.stringify(profile));
      localStorage.setItem('id_token', id_token);  
      
      console.log(JSON.stringify(profile));
      console.log(id_token);

      self.loggedIn();
    });
  }

  logout(){
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');

    this.loggedIn();
  }
  
  loggedIn(){
    return tokenNotExpired();
  }
} 
