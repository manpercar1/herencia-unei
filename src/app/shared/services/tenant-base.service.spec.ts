import { TestBed } from '@angular/core/testing';

import { ClientBaseService } from './tenant-base.service';

describe('ClientBaseService', () => {
  let service: ClientBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
