import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

import { Card } from '../../../../utils/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() item!: Card;
  constructor(private order: OrderService, private router: Router) {}

  ngOnInit(): void {}

  /**
   * set selected product + navigate to fullinfo page
   */
  select(): void {
    this.order.setProdact(this.item);
    this.router.navigateByUrl(`purchase/${this.item.id}`);
  }
}
