import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

constructor(public router: Router, public auth: AuthService){ }

canActivate(): boolean {
  if (!this.auth.isAuthenticated()){
    this.router.navigate(['homepg']);
    return false;
  }
  return true;
}

}