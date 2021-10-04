import { TestBed } from '@angular/core/testing';
import { EmpRegServiceService } from 'src/app/service/emp-reg-service.service';



describe('EmpRegServiceService', () => {
  let service: EmpRegServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpRegServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
