import { TestBed } from '@angular/core/testing';

import { GalleryserviceService } from './galleryservice.service';

describe('GalleryserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GalleryserviceService = TestBed.get(GalleryserviceService);
    expect(service).toBeTruthy();
  });
});
