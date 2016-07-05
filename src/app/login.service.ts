import {Injectable} from '@angular/core';
import {tokenNotExpired, JwtHelper} from 'angular2-jwt';

declare var Auth0Lock: any;

@Injectable()
export class LoginService {
  lock = new Auth0Lock('9wy0lBjMWP5oi7irUcdjByrxCvm1uQqC','muscaiuuu.eu.auth0.com')
  jwtHelper: JwtHelper = new JwtHelper();
  profile: any;

  constructor() {
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
    });
  }
  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem('profile'));
      // this.lock.on("authenticated", (authResult) => {
      //     localStorage.setItem('id_token', authResult.idToken);
      //  });
  }

  public login(){
    //var self = this;
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
  public logout(){
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
  }
  public loggedIn(){
    return tokenNotExpired();
  }
}