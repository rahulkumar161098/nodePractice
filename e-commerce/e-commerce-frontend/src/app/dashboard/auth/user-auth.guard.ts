import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {

  constructor(
    private _route: Router,
  ){}

  token= localStorage.getItem('token')

  canActivate(): any{

    if(this.token){
      return true

    }else{
      alert('Please Login First !')
      this._route.navigate(['dashboard/login'])
      return false
    }

  }
}
