import { TestBed } from '@angular/core/testing';

import { ServiceIndustryService } from './service-industry.service';

describe('ServiceIndustryService', () => {
  let service: ServiceIndustryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceIndustryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
