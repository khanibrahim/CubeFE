import { TestBed } from '@angular/core/testing';

import { QserviceService } from './qservice.service';

describe('QserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QserviceService = TestBed.get(QserviceService);
    expect(service).toBeTruthy();
  });
});
