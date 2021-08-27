import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '@auth0/auth0-angular';

import { tap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean  {

    return this.auth.isAuthenticated$.pipe(
      tap( loggedIn => {
        if( loggedIn ) {
          console.log('access granted');
        } else {
          this.router.navigate(['/home'])
        }
      })
    )
  }
  
}
