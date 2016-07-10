import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2'

@Injectable()
export class UsersService {

  constructor(private _af: AngularFire) {}

getUsers(){
        return this._af.database.list('hr/users');
    }
}
