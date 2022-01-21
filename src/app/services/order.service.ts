import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Card, Order } from '../utils/interfaces';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  order!: Order;
  product!: Card;

  setOrder(form: Order) {
    this.order = form;
  }

  setProdact(item: Card) {
    this.product = item;
  }

  /**
   * get order info
   */
  getOrder(): Observable<Order> {
    return of(this.order);
  }

  /**
   * get selected product
   */
  getProdact(): Observable<Card> {
    return of(this.product);
  }
}
