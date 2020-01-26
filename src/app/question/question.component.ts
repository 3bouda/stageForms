import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
   questionForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    
    this.questionForm = this.fb.group({
      text: ['',Validators.required] ,
     type: ['checkbox',Validators.required],
     reponse : this.fb.array([])
    })
  }
  public get text(){
    return this.questionForm.get('text');
  }
  public get type(){
    return this.questionForm.get('type') ;
  }
  public get lesreponses()
  {
  return this.questionForm.get('reponse') as FormArray;
  }
  addanswer(){
    this.lesreponses.push(new FormControl(''));
  }
  removeanswer(i){
   
      this.lesreponses.removeAt(i);
  }
  onSubmit(){
    console.log(this.questionForm.value);
    for (let l of this.lesreponses.controls)
  console.log(l.value);
  }
 
  
}
