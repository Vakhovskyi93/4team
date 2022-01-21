import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditCardHendlerService } from 'src/app/services/credit-card-hendler.service';

import { OrderService } from 'src/app/services/order.service';
import { SpinerService } from 'src/app/services/spiner.service';
import { Card, Order } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  userOrder!: Order;
  product!: Card;
  cardType: string = 'far fa-credit-card';
  constructor(
    private order: OrderService,
    private router: Router,
    private spiner: SpinerService,
    private creditCardServise: CreditCardHendlerService
  ) {
    /**
     * if no order => navigate to homepage
     * else get it
     */
    this.order
      .getOrder()
      .pipe()
      .subscribe((data) =>
        data ? (this.userOrder = data) : this.router.navigateByUrl('')
      );

    /**
     * get product
     *  */
    this.order.getProdact().subscribe((data) => {
      this.product = data;
    });
  }

  ngOnInit(): void {}

  /**
   * open spiner and navigate to next page after 20s
   */
  submit() {
    this.spiner.show();
    setTimeout(() => {
      this.router.navigateByUrl('complete');
    }, 20000);
  }

  getCardIcon(){
    return this.creditCardServise.setPaymentCompany(this.userOrder.cardNumber.slice(0,2))
  }
}
