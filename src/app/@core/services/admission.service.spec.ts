import { TestBed } from '@angular/core/testing';

import { AdmissionService } from './admission.service';

describe('AddmissionService', () => {
  let service: AdmissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
