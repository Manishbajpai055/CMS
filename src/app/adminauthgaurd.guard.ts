import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';


@Injectable()
export class AdminauthgaurdGuard implements CanActivate {

  constructor(private router: Router, private loginService : AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
     if (localStorage.getItem('token')) {
        let role = localStorage.getItem('role')
        if (role == 'admin') {
          return true
        } else {
          this.router.navigate(['/auth'])
        }
        return true
     }
     else {
       this.router.navigate(['/auth'], { queryParams: {}});
       return false;
     }
  }
}

