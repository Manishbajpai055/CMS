import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAnswersComponent } from './new-answers.component';

describe('NewAnswersComponent', () => {
  let component: NewAnswersComponent;
  let fixture: ComponentFixture<NewAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
