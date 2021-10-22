import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";




@Injectable({ providedIn: 'root'})
export class authGuard implements CanActivate{

  /**
   *
   */
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot){
    this.router.navigate(['/login']);
    return false;
  }

}
