import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    helper = new JwtHelperService();
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('token')) {
            // logged in so return true
            const token= localStorage.getItem('token');
            const isExpired = this.helper.isTokenExpired(token);
            if(!isExpired){
                return true;
            }
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
            return false;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}