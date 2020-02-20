import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionnaireListeComponent } from './questionnaire-liste/questionnaire-liste.component';
import { AffquestionnaireComponent } from './affquestionnaire/affquestionnaire.component';
import { EditQuestionnaireComponent } from './edit-questionnaire/edit-questionnaire.component';
import { UserComponent } from './user/user.component';
import { UserQuestionnareListComponent } from './user-questionnare-list/user-questionnare-list.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AdminComponent } from './admin/admin.component';
import { SignupUserComponent } from './signup-user/signup-user.component';
import { LoginUserComponent } from './login-user/login-user.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    QuestionnaireListeComponent,
    AffquestionnaireComponent,
    EditQuestionnaireComponent,
    UserComponent,
    UserQuestionnareListComponent,
    AccueilComponent,
    AdminComponent,
    SignupUserComponent,
    LoginUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
