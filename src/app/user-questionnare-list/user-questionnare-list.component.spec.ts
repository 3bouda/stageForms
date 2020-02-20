import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQuestionnareListComponent } from './user-questionnare-list.component';

describe('UserQuestionnareListComponent', () => {
  let component: UserQuestionnareListComponent;
  let fixture: ComponentFixture<UserQuestionnareListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserQuestionnareListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserQuestionnareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
