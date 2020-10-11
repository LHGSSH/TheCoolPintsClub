import { TestBed } from '@angular/core/testing';

import { IceCreamDataService } from './ice-cream-data.service';

describe('IceCreamDataService', () => {
  let service: IceCreamDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IceCreamDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
