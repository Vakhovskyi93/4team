import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Card, Order } from '../utils/interfaces';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  order!: Order;
  product!: Card;

   

  constructor() { }

  setOrder(form:Order){
    this.order = form;
  }

  setProdact(item: Card){
    this.product = item;
  }

  getOrder():Observable<Order>{
    return of(this.order)
  }
 
  getProdact():Observable<Card>{
    return of(this.product)
  }



}
