import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsummeryComponent } from './blogsummery.component';

describe('BlogsummeryComponent', () => {
  let component: BlogsummeryComponent;
  let fixture: ComponentFixture<BlogsummeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogsummeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
