import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(
    private order: OrderService,
    private router: Router,
    private spiner: SpinerService
  ) {
    this.order
      .getOrder()
      .pipe()
      .subscribe((data) =>
        data ? (this.userOrder = data) : this.router.navigateByUrl('')
      );
    this.order.getProdact().subscribe((data) => {
      this.product = data;
    });
  }

  ngOnInit(): void {}
  submit() {
    this.spiner.show();
    setTimeout(() => {
      this.router.navigateByUrl('complete');
    }, 20000);
  }
}
