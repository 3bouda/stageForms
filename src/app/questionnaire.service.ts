import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  constructor(private _Http:HttpClient) { } 
  ajouter(questionnaire){
    return this._Http.post("http://localhost:3000/questionnaire",questionnaire);
  }
  getQuestionnaire(){
    return this._Http.get("http://localhost:3000/questionnaire");
  }
  suppQuestionnaire(questionnaire){
    return this._Http.delete("http://localhost:3000/questionnaire/"+ questionnaire.id);
  }
  getQuestionnaireParId(id){
    return this._Http.get("http://localhost:3000/questionnaire/"+id);
  }
  modifierQuestionnaire(questionnaire){
    return this._Http.put("http://localhost:3000/questionnaire/"+ questionnaire.id ,questionnaire);
  }
  getUser() {
    return this._Http.get("http://localhost:3000/user/2");
  }
  repondUser(reponse){
    return this._Http.put("http://localhost:3000/user/2",reponse);
  }
  ajouterUser(user){
    return this._Http.post("http://localhost:3000/user",user);
  }
}
