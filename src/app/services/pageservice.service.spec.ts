import { TestBed } from '@angular/core/testing';

import { PageserviceService } from './pageservice.service';

describe('PageserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageserviceService = TestBed.get(PageserviceService);
    expect(service).toBeTruthy();
  });
});
