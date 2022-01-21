import { Component, OnInit } from '@angular/core';
import { personalSubscriptions, enterpriseSubscriptions } from '../../../utils/mock';
import { Card } from '../../../utils/interfaces'

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent  {
  personalSubscriptions: Card[] = personalSubscriptions;
  enterpriseSubscriptions: Card[] = enterpriseSubscriptions;
}
