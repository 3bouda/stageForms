import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from '../questionnaire.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-affquestionnaire',
  templateUrl: './affquestionnaire.component.html',
  styleUrls: ['./affquestionnaire.component.css']
})
export class AffquestionnaireComponent implements OnInit {
  
  ques:Object;
  identifiant:number;
  constructor(private questionnaire:QuestionnaireService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.identifiant = this.activatedRoute.snapshot.params['id'];
    this.afficherQuestionnaire();
  }
afficherQuestionnaire(){
  this.questionnaire.getQuestionnaireParId(this.identifiant).subscribe(Response=>{
    this.ques=Response
  })
}

}
