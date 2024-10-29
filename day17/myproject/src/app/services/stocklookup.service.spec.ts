import { TestBed } from '@angular/core/testing';

import { StocklookupService } from './stocklookup.service';

describe('StocklookupService', () => {
  let service: StocklookupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StocklookupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
