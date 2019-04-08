import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponentadmin } from './about.component';

describe('AboutComponentadmin', () => {
  let component: AboutComponentadmin;
  let fixture: ComponentFixture<AboutComponentadmin>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponentadmin ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponentadmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
