import { TestBed } from '@angular/core/testing';

import { KovaImageService } from './kova-image.service';

describe('KovaImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KovaImageService = TestBed.get(KovaImageService);
    expect(service).toBeTruthy();
  });
});
