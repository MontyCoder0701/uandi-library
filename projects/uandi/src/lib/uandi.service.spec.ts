import { TestBed } from '@angular/core/testing';

import { UandiService } from './uandi.service';

describe('UandiService', () => {
  let service: UandiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UandiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
