import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms'
@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
questionnaire:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.questionnaire=this.fb.group({ 
      questionnaireName: [''],      
      section : this.fb.array([this.creatSection()])
    })
  }


creatSection():FormGroup{
return this.fb.group({
 sectionName:[''],
 question:this.fb.array([this.creatQuestion()])
}) 
}
public get section(){
  return this.questionnaire.controls['section'] as FormArray;
}
addSection(){

  this.section.push(this.creatSection());
}

creatQuestion():FormGroup{
  return this.fb.group({
    questionName:[''],
    type:['checkbox'],
    answer:this.fb.array([this.creatAnswer()])
  })
}

addQuestion(groupSection:FormArray){
  const arrayQuestion=groupSection.get('question') as FormArray
  arrayQuestion.push(this.creatQuestion())
}

creatAnswer():FormGroup{
  return this.fb.group({
    id:[''],
    answerName:['']
  })
}

addAnswer(groupQuestion:FormArray){
  const arrayAnswer=groupQuestion.get('answer') as FormArray;
arrayAnswer.push(this.creatAnswer());
}

onSubmit(){
  console.log(this.questionnaire.value); 
}
// removeanswer(i){
   
//   this.lesreponses.removeAt(i);
// }
}
