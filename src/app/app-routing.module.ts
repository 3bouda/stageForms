import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionnaireListeComponent } from './questionnaire-liste/questionnaire-liste.component';
import { AffquestionnaireComponent } from './affquestionnaire/affquestionnaire.component';


const routes: Routes = [
  {path:'questionnaireliste', component:QuestionnaireListeComponent},
  {path:'questionnaireliste/:id',component:AffquestionnaireComponent},
  {path:'ajoutquestionnaire', component:QuestionnaireComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

