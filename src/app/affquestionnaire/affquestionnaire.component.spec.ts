import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffquestionnaireComponent } from './affquestionnaire.component';

describe('AffquestionnaireComponent', () => {
  let component: AffquestionnaireComponent;
  let fixture: ComponentFixture<AffquestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffquestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffquestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
