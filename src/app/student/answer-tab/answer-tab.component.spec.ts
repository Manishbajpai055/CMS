import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerTabComponent } from './answer-tab.component';

describe('AnswerTabComponent', () => {
  let component: AnswerTabComponent;
  let fixture: ComponentFixture<AnswerTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
