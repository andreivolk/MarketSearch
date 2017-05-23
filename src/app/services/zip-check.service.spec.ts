import { TestBed, inject } from '@angular/core/testing';

import { ZipCheckService } from './zip-check.service';

describe('ZipCheckService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZipCheckService]
    });
  });

  it('should ...', inject([ZipCheckService], (service: ZipCheckService) => {
    expect(service).toBeTruthy();
  }));
});
