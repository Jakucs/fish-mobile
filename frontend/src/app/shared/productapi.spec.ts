import { TestBed } from '@angular/core/testing';

import { Productapi } from './productapi';

describe('Productapi', () => {
  let service: Productapi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Productapi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
