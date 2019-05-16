import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogeditorComponent } from './blogeditor.component';

describe('BlogeditorComponent', () => {
  let component: BlogeditorComponent;
  let fixture: ComponentFixture<BlogeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
