import { Injectable } from '@angular/core';

import { CardNumberCode } from '../utils/interfaces';
import { countryList } from '../utils/mock';

@Injectable({
  providedIn: 'root'
})
export class CreditCardHendlerService {
  countries = countryList;
  clicksWithClosedPopup:any
  constructor() { }

  setPaymentCompany(code: string) {
    switch (code[0]) {
      case CardNumberCode.AMEX:
        return 'fab fa-cc-amex';

      case CardNumberCode.VISA:
        return 'fab fa-cc-visa';

      case CardNumberCode.MASTERCARD:
        return 'fab fa-cc-mastercard';

      default:
        return 'far fa-credit-card';
    }
  }


    
   


}
