import { TestBed } from '@angular/core/testing';

import { AnswersServiceService } from './answers-service.service';

describe('AnswersServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnswersServiceService = TestBed.get(AnswersServiceService);
    expect(service).toBeTruthy();
  });
});
