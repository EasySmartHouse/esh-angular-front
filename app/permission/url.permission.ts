import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class UrlPermission implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('authToken')) {
      return true;
    }

    this.router.navigate(['/user/login'], { 
        queryParams: { returnUrl: state.url }}
    );
    return false;
  }
}