import { TestBed } from '@angular/core/testing';

import { CountriesCapitalService } from './countries-capital.service';

describe('CountriesCapitalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountriesCapitalService = TestBed.get(CountriesCapitalService);
    expect(service).toBeTruthy();
  });
});
