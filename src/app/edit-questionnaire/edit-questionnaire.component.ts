import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from '../questionnaire.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Section } from '../section';
import { EditService } from './edit.service';
import { Answer } from '../answer';
import { Question } from '../question';

@Component({
  selector: 'app-edit-questionnaire',
  templateUrl: './edit-questionnaire.component.html',
  styleUrls: ['./edit-questionnaire.component.css']
})
export class EditQuestionnaireComponent implements OnInit {
ques:object;
identifiant:number;

  constructor(public router:Router,private edit:EditService, private questionnaire:QuestionnaireService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.identifiant = this.activatedRoute.snapshot.params['id'];
    this.afficherQuestionnaire();
    
  }
  afficherQuestionnaire(){
    this.questionnaire.getQuestionnaireParId(this.identifiant).subscribe(Response=>{
      this.ques=Response
    })
  }
  editquestionnaire(t){
    this.questionnaire.modifierQuestionnaire(t).subscribe(Response=>{
      this.afficherQuestionnaire();
  });
  this.router.navigate(['questionnaireliste']);
}
removeSection(i){
  this.ques['section'].splice(i,1);   
}

removeQuestion(r,j){
  this.edit.removeQuestion(r,j);
}
removeAnswer(d,k){
this.edit.removeAnswer(d,k);
}

addAnswer(d){
  this.edit.addAnswer(d);
}
addQuestion(r){
 this.edit.addQuestion(r);
}
addSection(){
  let f='';
  let t= new Answer(f);
  let s=[t];
  let q='';
  let z='';
  let y= new Question(q,z,s);
  let r='';
  let a=[y];
  let c=new Section(r,a);
  this.ques['section'].push(c)
}

}
