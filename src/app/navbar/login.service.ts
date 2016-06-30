import {Injectable} from '@angular/core';
import {tokenNotExpired, JwtHelper} from 'angular2-jwt';

declare var Cheia;

@Injectable()
export class LoginService {
  lock = new Cheia('9wy0lBjMWP5oi7irUcdjByrxCvm1uQqC','muscaiuuu.eu.auth0.com')
  jwtHelper: JwtHelper = new JwtHelper();
  profile: any;

  constructor() {}

  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem('profile'));
  }

  login(){
    //var felf = this;
  this.lock.show((
          err: string, 
          profile: string, 
          id_token: string
          ) => {
              if (err){
                throw new Error(err);
              }
          localStorage.setItem('profile', JSON.stringify(profile));
          localStorage.setItem('id_token', id_token);
            
          this.loggedIn();   
          });
  }
  logout(){
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
  }
  loggedIn(){
    return tokenNotExpired();
  }
}