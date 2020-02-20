import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthAdminService } from '../auth-admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
admin:FormGroup;
  constructor(private fb:FormBuilder,private auth:AuthAdminService) { }

  ngOnInit() {
    this.admin=this.fb.group({
      adminName:['',Validators.required],
      adminPassword:['',Validators.required]
    })
  }
onSubmit(u){
  this.auth.login(u);
}
}
