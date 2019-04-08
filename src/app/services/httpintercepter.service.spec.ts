import { TestBed } from '@angular/core/testing';

import { HttpintercepterService } from './httpintercepter.service';

describe('HttpintercepterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpintercepterService = TestBed.get(HttpintercepterService);
    expect(service).toBeTruthy();
  });
});
