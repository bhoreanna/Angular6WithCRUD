import { TestBed, inject } from '@angular/core/testing';

import { RouteGurdService } from './route-gurd.service';

describe('RouteGurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteGurdService]
    });
  });

  it('should be created', inject([RouteGurdService], (service: RouteGurdService) => {
    expect(service).toBeTruthy();
  }));
});
