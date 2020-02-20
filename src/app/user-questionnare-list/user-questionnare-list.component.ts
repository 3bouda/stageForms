import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from '../questionnaire.service';

@Component({
  selector: 'app-user-questionnare-list',
  templateUrl: './user-questionnare-list.component.html',
  styleUrls: ['./user-questionnare-list.component.css']
})
export class UserQuestionnareListComponent implements OnInit {
  ques:Object;
  constructor(private questionnaire:QuestionnaireService) { }
 
  ngOnInit() {
    this.afficherQuestionnaire();
  }
afficherQuestionnaire(){
  this.questionnaire.getQuestionnaire().subscribe(Response=>{
    this.ques=Response
  })
}


}