import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageditorComponent } from './pageditor.component';

describe('PageditorComponent', () => {
  let component: PageditorComponent;
  let fixture: ComponentFixture<PageditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
