import { Injectable } from '@angular/core';
import { Answer } from '../answer';
import { Question } from '../question';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  constructor() { }
  removeQuestion(r,j){
    r.question.splice(j,1);
  }
  removeAnswer(d,k){
    d.answer.splice(k,1)
  }
  addAnswer(d){
    let j='';
    let t= new Answer(j)
    d.answer.push(t)
  }  
  addQuestion(r){
    let q='';
    let t='';
    let a='';
    let f= new Answer(a);
    let s=[f];
    let c= new Question(q,t,s)
    r.question.push(c)
  }


}
