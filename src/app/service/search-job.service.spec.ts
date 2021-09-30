import { TestBed } from '@angular/core/testing';

import { SearchJobService } from './search-job.service';

describe('SearchJobService', () => {
  let service: SearchJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
