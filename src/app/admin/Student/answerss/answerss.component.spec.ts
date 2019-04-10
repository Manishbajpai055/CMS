import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerssComponent } from './answerss.component';

describe('AnswerssComponent', () => {
  let component: AnswerssComponent;
  let fixture: ComponentFixture<AnswerssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
