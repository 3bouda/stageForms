import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from '../questionnaire.service';

@Component({
  selector: 'app-questionnaire-liste',
  templateUrl: './questionnaire-liste.component.html',
  styleUrls: ['./questionnaire-liste.component.css']
})
export class QuestionnaireListeComponent implements OnInit {
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
deleteQuestionnaire(q){
  if(confirm('Vous étes sur de supprimer ce questionnaire ?')== true){
  this.questionnaire.suppQuestionnaire(q).subscribe(
    Response=>{this.afficherQuestionnaire();
    });
  }
}
}
