import { TestBed } from '@angular/core/testing';

import { APODService } from './apod.service';

describe('APODService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: APODService = TestBed.get(APODService);
    expect(service).toBeTruthy();
  });
});
