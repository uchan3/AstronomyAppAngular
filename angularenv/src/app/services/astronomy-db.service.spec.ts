import { TestBed } from '@angular/core/testing';

import { AstronomyDBService } from './astronomy-db.service';

describe('AstronomyDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AstronomyDBService = TestBed.get(AstronomyDBService);
    expect(service).toBeTruthy();
  });
});
