import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/selection/selection.module').then(
        (m) => m.SelectionModule
      ),
  },
  {
    path: 'purchase',
    loadChildren: () =>
      import('./modules/credit-card-info/card-view.module').then(
        (m) => m.CardViewModule
      ),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./modules/order-view/order-view.module').then(
        (m) => m.OrderViewModule
      ),
  },
  {
    path: 'complete',
    loadChildren: () =>
      import('./modules/completed-purchase/completed-purchase.module').then(
        (m) => m.CompletedPurchaseModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
