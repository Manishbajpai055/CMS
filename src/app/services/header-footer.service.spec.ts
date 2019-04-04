import { TestBed } from '@angular/core/testing';

import { HeaderFooterService } from './header-footer.service';

describe('HeaderFooterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeaderFooterService = TestBed.get(HeaderFooterService);
    expect(service).toBeTruthy();
  });
});
