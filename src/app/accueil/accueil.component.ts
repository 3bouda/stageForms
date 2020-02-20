import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthAdminService } from '../auth-admin.service';
import { AuthUserService } from '../auth-user.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private router:Router, private adminAuth:AuthAdminService,private userAuth:AuthUserService) { }
  logOut(){
    this.adminAuth.logOut();
    this.userAuth.logOut();
    this.router.navigate(['/admin']);
  }
  ngOnInit() {
  }

}
