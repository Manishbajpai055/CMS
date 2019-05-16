import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogliistComponent } from './blogliist.component';

describe('BlogliistComponent', () => {
  let component: BlogliistComponent;
  let fixture: ComponentFixture<BlogliistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogliistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogliistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
