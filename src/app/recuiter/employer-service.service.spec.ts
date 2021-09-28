import { TestBed } from '@angular/core/testing';

import { EmployerServiceService } from './employer-service.service';

describe('EmployerServiceService', () => {
  let service: EmployerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
