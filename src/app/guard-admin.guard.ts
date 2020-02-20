import { Injectable } from '@angular/core';
import { CanActivate, Router , ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { AuthAdminService } from './auth-admin.service';

@Injectable({
  providedIn: 'root'
})
export class GuardAdminGuard implements CanActivate {

  constructor(private router:Router, private auth:AuthAdminService){}

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
  if (this.auth.connected()){
    return true;
  }
  else {
    this.router.navigateByUrl('/admin');
    return false;
  }

  }
  
}
