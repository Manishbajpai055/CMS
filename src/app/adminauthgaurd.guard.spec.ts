import { TestBed, async, inject } from '@angular/core/testing';

import { AdminauthgaurdGuard } from './adminauthgaurd.guard';

describe('AdminauthgaurdGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminauthgaurdGuard]
    });
  });

  it('should ...', inject([AdminauthgaurdGuard], (guard: AdminauthgaurdGuard) => {
    expect(guard).toBeTruthy();
  }));
});
