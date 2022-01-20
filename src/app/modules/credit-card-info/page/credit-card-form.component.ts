import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { merge, Observable, OperatorFunction, Subject } from 'rxjs';
import { debounceTime,  distinctUntilChanged,  filter,  map,  tap } from 'rxjs/operators';

import {
  PATTERN_FOR_CVV,
  PATTERN_FOR_EMAIL,
  PATTERN_FOR_CARD,
} from 'src/app/utils/patterns';
import { states, countryList } from 'src/app/utils/mock';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.scss'],
})
export class CreditCardFormComponent implements OnInit {
  planName!: string;
  form!: FormGroup;
  cardType: string = 'far fa-credit-card';

  @ViewChild('countries', { static: true }) countries!: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  @ViewChild('states', { static: true }) states!: NgbTypeahead;
  focusState$ = new Subject<string>();
  clickState$ = new Subject<string>();

  searchState: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) => {
    const debouncedText$ = text$.pipe(
      debounceTime(200),
      distinctUntilChanged()
    );
    const clicksWithClosedPopup$ = this.click$.pipe(
      filter(() => !this.states.isPopupOpen())
    );
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map((term) =>
        (term === ''
          ? states
          : states.filter(
              (v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1
            )
        ).slice(0, 10)
      )
    );
  };

  searchCountry: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) => {
    const debouncedText$ = text$.pipe(
      debounceTime(200),
      distinctUntilChanged()
    );
    const clicksWithClosedPopup$ = this.click$.pipe(
      filter(() => !this.countries.isPopupOpen())
    );
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map((term) =>
        (term === ''
          ? countryList
          : countryList.filter(
              (v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1
            )
        ).slice(0, 10)
      )
    );
  };

  constructor(
    private activateRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.planName = this.activateRoute.snapshot.params['name'];
    this.formInit();
    this.form
      .get('country')
      ?.valueChanges.pipe(
        tap(() => {
          this.form.get('country')?.value === 'United States of America (the)'
            ? this.addStateControl()
            : this.removeStateControl();
        })
      )
      .subscribe();
    this.form
      .get('cardNumber')
      ?.valueChanges.pipe(
        tap(() => {
          this.setPaymentCompany(this.form.get('cardNumber')!.value);
        })
      )
      .subscribe();
  }

  private formInit() {
    this.form = this.formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(PATTERN_FOR_EMAIL),
      ]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      street1: new FormControl('', [Validators.required]),
      street2: new FormControl('', [Validators.required]),
      zipCode: new FormControl('', [Validators.required]),
      cardNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(PATTERN_FOR_CARD),
      ]),
      cvv: new FormControl('', [
        Validators.required,
        Validators.pattern(PATTERN_FOR_CVV),
      ]),
      expDate: new FormControl('', [Validators.required])
    });
  }
  submit(){
    this.orderService.setOrder(this.form.value);
    this.router.navigateByUrl(`order/${this.planName}`);
    
  }

  private addStateControl() {
    this.form.addControl('state', new FormControl('', Validators.required));
  }

  private removeStateControl() {
    this.form.get('state') ? this.form.removeControl('state') : null;
  }

  setPaymentCompany(code: string) {
    switch (code[0]) {
      case '3':
        this.cardType = 'fab fa-cc-amex';
        break;

      case '4':
        this.cardType = 'fab fa-cc-visa';
        break;

      case '5':
        this.cardType = 'fab fa-cc-mastercard';
        break;

      case '3' || '5' || '6':
        this.cardType = 'far fa-credit-card';
        break;

      default:
        this.cardType = 'far fa-credit-card';
    }
  }

  public requiredError(formControlName:string){
    return  this.form.get(formControlName)?.hasError('required') 
            && this.form.get(formControlName)?.touched 
            && this.form.get(formControlName)?.dirty ;
  }
  public validationError(formControlName:string, checkAftersymbols: number){
   
      return  this.form.get(formControlName)?.value.length > checkAftersymbols 
              && this.form.get(formControlName)?.hasError('pattern'); 
    }
     
  
}
