import { TestBed } from '@angular/core/testing';

import { QustionServiceService } from './qustion-service.service';

describe('QustionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QustionServiceService = TestBed.get(QustionServiceService);
    expect(service).toBeTruthy();
  });
});
