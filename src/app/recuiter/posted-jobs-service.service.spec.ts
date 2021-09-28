import { TestBed } from '@angular/core/testing';

import { PostedJobsServiceService } from './posted-jobs-service.service';

describe('PostedJobsServiceService', () => {
  let service: PostedJobsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostedJobsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
