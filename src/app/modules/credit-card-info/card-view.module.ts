import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardFormComponent } from './page/credit-card-form.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    CreditCardFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTypeaheadModule,
    RouterModule.forChild([{ path: ':name', component: CreditCardFormComponent }]),
    FontAwesomeModule,
     
    
  ]
})
export class CardViewModule { }
