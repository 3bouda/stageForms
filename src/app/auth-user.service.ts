import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireService } from './questionnaire.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService implements OnInit{
user:Object
;
aa=true;
  constructor(private router:Router, private questionnaire:QuestionnaireService) { }
  logIn = true;
   
  ngOnInit(){
    this.afficherUser();
   
  }
  afficherUser(){
    this.questionnaire.getUser().subscribe(Response=>{ 
     this.user=Response;
    })
  }



  login(t){
    
  
    for(let a in this.user){  //lehne el ghalta
      console.log(a);
      if (t.userName == a['userName'] && t.userPassword == a['userPassword']){
        this.aa=false;
        this.logIn = true;
        this.router.navigateByUrl('/userQuestionnaireListe');
      } 
    }
      if (this.aa == true){
        this.router.navigateByUrl('/login-user');      
      }
  }
  signup(t){
    this.questionnaire.ajouterUser(t).subscribe(Response=>{
      this.afficherUser();
    });
    this.logIn = true;
    this.router.navigateByUrl('/userQuestionnaireListe');
  }
  logOut(){
    this.logIn = false;
  }
  connected(){
    return this.logIn;
  }
}
