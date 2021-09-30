import { TestBed } from '@angular/core/testing';

import { JobactivityService } from './jobactivity.service';

describe('JobactivityService', () => {
  let service: JobactivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobactivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
