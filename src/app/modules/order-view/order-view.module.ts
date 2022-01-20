import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OrderComponent } from './page/order.component';
import { BlurePipe } from 'src/app/pipes/blure.pipe';
import { NgxSpinnerModule } from 'ngx-spinner';
 



@NgModule({
  declarations: [
    OrderComponent,
    BlurePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: ':name', component: OrderComponent }]),
    NgxSpinnerModule
  ]
})
export class OrderViewModule { }
