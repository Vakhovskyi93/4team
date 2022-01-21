import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class SpinerService {
  constructor(private spinner: NgxSpinnerService) {}

  /**
   * open loading spiner
   */
  show() {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 20000);
  }
}
