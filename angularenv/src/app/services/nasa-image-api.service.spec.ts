import { TestBed } from '@angular/core/testing';

import { NasaImageAPIService } from './nasa-image-api.service';

describe('NasaImageAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NasaImageAPIService = TestBed.get(NasaImageAPIService);
    expect(service).toBeTruthy();
  });
});
