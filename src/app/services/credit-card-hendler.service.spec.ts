import { TestBed } from '@angular/core/testing';

import { CreditCardHendlerService } from './credit-card-hendler.service';

describe('CreditCardHendlerService', () => {
  let service: CreditCardHendlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditCardHendlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
