import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {

  constructor(private router:Router) { }
  logIn = false;

  login(t){
    if (t.adminName == "iheb" && t.adminPassword == "abdelali"){
      this.logIn = true;
      this.router.navigate(['questionnaireliste']);
    }
    else{
      this.router.navigateByUrl('/admin');
    }
  }
  logOut(){
    this.logIn = false;
  }
  connected(){
    return this.logIn;
  }
}
