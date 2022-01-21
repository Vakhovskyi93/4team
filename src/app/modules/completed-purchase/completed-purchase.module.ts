import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CompletedComponent } from './page/completed.component';

@NgModule({
  declarations: [CompletedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CompletedComponent }]),
  ],
})
export class CompletedPurchaseModule {}
