import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewnotesComponent } from './newnotes.component';

describe('NewnotesComponent', () => {
  let component: NewnotesComponent;
  let fixture: ComponentFixture<NewnotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewnotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
