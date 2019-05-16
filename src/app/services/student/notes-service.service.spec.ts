import { TestBed } from '@angular/core/testing';

import { NotesServiceService } from './notes-service.service';

describe('NotesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotesServiceService = TestBed.get(NotesServiceService);
    expect(service).toBeTruthy();
  });
});
