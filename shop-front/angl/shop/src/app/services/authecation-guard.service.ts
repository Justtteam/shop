import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthecationService} from "./authecation.service";

@Injectable({
  providedIn: 'root'
})
export class AuthecationGuardService implements CanActivate{

  constructor(private router: Router,
              private authService:AuthecationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isUserLoggedIn()){
      return true;
    }
    this.router.navigate(['login'])
    return false;
  }
}
