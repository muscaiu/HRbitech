import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { tokenNotExpired, JwtHelper} from 'angular2-jwt';

declare var Auth0Lock;

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl : 'navbar.component.html',
  directives: [ROUTER_DIRECTIVES] 
})

export class NavbarComponent{
  lock = new Auth0Lock('9wy0lBjMWP5oi7irUcdjByrxCvm1uQqC','muscaiuuu.eu.auth0.com')
  jwtHelper: JwtHelper = new JwtHelper();
  profile : any;

  constructor(){
    this.profile = JSON.parse(localStorage.getItem('profile'));
  }
  
  login(){
    var self = this;
    this.lock.show((err: string, profile: string, id_token: string) =>{
      if (err){
        throw new Error(err);
      }

      localStorage.setItem('profile', JSON.stringify(profile));
      localStorage.setItem('id_token', id_token);  

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