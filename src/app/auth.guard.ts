import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate() {
     if (localStorage.getItem('token')) {
       return true;
     }
     else {
       this.router.navigate(['/auth'], { queryParams: {}});
       return false;
     }
  }
}
