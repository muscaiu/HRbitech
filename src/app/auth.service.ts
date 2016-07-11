import { Injectable } from '@angular/core'
import { tokenNotExpired, JwtHelper} from 'angular2-jwt';

declare var Auth0Lock;

@Injectable()
export class AuthService{

    lock = new Auth0Lock('9wy0lBjMWP5oi7irUcdjByrxCvm1uQqC','muscaiuuu.eu.auth0.com');
    user: Object;

    constructor(){
        this.user = JSON.parse(localStorage.getItem('profile'));
    }

    public login(){
        this.lock.show({}, (err: string, profile: Object, id_token: string) => {
            if (err) {console.log(err); return;}
            localStorage.setItem('profile', JSON.stringify(profile));
            localStorage.setItem('id_token', id_token); 
        });
    }

    public logout(){
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');
    }

    public loggedIn(){
        return tokenNotExpired;
    }

    public isAdmin() {
        if (this.user['role'] == 'admin') {
            return true;
        } else {
            return false;
        }
    }
}