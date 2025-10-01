import { TestBed } from '@angular/core/testing';

import { Authapi } from './authapi';

describe('Authapi', () => {
  let service: Authapi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Authapi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
