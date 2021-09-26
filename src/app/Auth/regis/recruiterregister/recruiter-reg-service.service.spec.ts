import { TestBed } from '@angular/core/testing';

import { RecruiterRegServiceService } from './recruiter-reg-service.service';

describe('RecruiterRegServiceService', () => {
  let service: RecruiterRegServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecruiterRegServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
