import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousellistComponent } from './carousellist.component';

describe('CarousellistComponent', () => {
  let component: CarousellistComponent;
  let fixture: ComponentFixture<CarousellistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarousellistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarousellistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
