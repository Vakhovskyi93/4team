import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectionComponent } from './page/selection.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from 'src/app/components/button/button.component';

@NgModule({
  declarations: [SelectionComponent, CardComponent, ButtonComponent],
  imports: [
    CommonModule,

    RouterModule.forChild([{ path: '', component: SelectionComponent }]),
    NgbModule,
  ],
  exports: [RouterModule],
})
export class SelectionModule {}
