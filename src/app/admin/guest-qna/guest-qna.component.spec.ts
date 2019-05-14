import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestQNAComponent } from './guest-qna.component';

describe('GuestQNAComponent', () => {
  let component: GuestQNAComponent;
  let fixture: ComponentFixture<GuestQNAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestQNAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestQNAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
