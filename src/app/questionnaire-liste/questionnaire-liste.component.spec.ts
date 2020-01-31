import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireListeComponent } from './questionnaire-liste.component';

describe('QuestionnaireListeComponent', () => {
  let component: QuestionnaireListeComponent;
  let fixture: ComponentFixture<QuestionnaireListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
