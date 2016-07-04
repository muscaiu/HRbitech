import { CanActivate }    from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';

//@Injectable()
export class AuthGuard implements CanActivate {
  canActivate() {
      if (tokenNotExpired()) {
        console.log('AuthGuard#canActivate called');
        return true;
      }
    }
}