import { TestBed } from '@angular/core/testing';

import { DeepSkyService } from './deep-sky.service';

describe('DeepSkyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeepSkyService = TestBed.get(DeepSkyService);
    expect(service).toBeTruthy();
  });
});
