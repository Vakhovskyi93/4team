import { Injectable } from '@angular/core';

import { CardNumberCode } from '../utils/interfaces';
import { countryList, states } from '../utils/mock';

@Injectable({
  providedIn: 'root',
})
export class CreditCardHendlerService {
  countries = countryList;
  states = states;

  constructor() {}

  setPaymentCompany(code: string): string {
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

  searchCountries(countryName: string) {
    return (
      countryName === ''
        ? this.countries
        : this.countries.filter(
            (v) => v.toLowerCase().indexOf(countryName.toLowerCase()) > -1
          )
    ).slice(0, 10);
  }
  searchState(stateName: string) {
    return (
      stateName === ''
        ? this.states
        : this.states.filter(
            (v) => v.toLowerCase().indexOf(stateName.toLowerCase()) > -1
          )
    ).slice(0, 10);
  }
}
