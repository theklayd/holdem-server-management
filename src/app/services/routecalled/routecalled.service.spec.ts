import { TestBed } from '@angular/core/testing';

import { RoutecalledService } from './routecalled.service';

describe('RoutecalledService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoutecalledService = TestBed.get(RoutecalledService);
    expect(service).toBeTruthy();
  });
});
