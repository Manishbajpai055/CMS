import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTabComponent } from './question-tab.component';

describe('QuestionTabComponent', () => {
  let component: QuestionTabComponent;
  let fixture: ComponentFixture<QuestionTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
