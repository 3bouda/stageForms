import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  suppetud(questionnaire){
    return this._Http.delete("http://localhost:3000/questionnaire/"+ questionnaire.id);
  }
  getQuestionnaireParId(id){
    return this._Http.get("http://localhost:3000/questionnaire/"+id);
  }
}
