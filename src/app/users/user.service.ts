import { AngularFire } from 'angularfire2';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService{
    
    constructor(private _af: AngularFire){}

    getUsers(){
        return this._af.database.list('hr/users');
    }
}