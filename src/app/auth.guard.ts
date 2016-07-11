import { CanActivate }    from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';

//@Injectable()
export class AuthGuard implements CanActivate {
  canActivate() {
      if (tokenNotExpired()) {
        return true;
      }
    }
}