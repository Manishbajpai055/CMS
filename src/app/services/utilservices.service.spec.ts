import { TestBed } from '@angular/core/testing';

import { UtilService } from './utilservices.service';

describe('UtilservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtilService = TestBed.get(UtilService);
    expect(service).toBeTruthy();
  });
});
