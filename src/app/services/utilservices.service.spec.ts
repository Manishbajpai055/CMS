import { TestBed } from '@angular/core/testing';

import { UtilservicesService } from './utilservices.service';

describe('UtilservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtilservicesService = TestBed.get(UtilservicesService);
    expect(service).toBeTruthy();
  });
});
