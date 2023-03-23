import { TestBed } from '@angular/core/testing';

import { RenkeiService } from './renkei.service';

describe('RenkeiService', () => {
  let service: RenkeiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenkeiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
