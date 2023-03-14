import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private router: Router,
    private loginService: LoginService,
  ) {

  }

  redirect(flag: boolean) {
    if (!flag) {
      this.router.navigate(['/', 'login'])
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userAuth = this.loginService.isLoggedIn()
    this.redirect(userAuth)
    return true
  }
  
}
