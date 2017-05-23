import { TestBed, inject } from '@angular/core/testing';

import { MarketapiService } from './marketapi.service';

describe('MarketapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarketapiService]
    });
  });

  it('should ...', inject([MarketapiService], (service: MarketapiService) => {
    expect(service).toBeTruthy();
  }));
});
