import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-aim-product-details',
  templateUrl: './aim-sap-comparison-pdp-page.component.html',
})
export class AimSapComparisonPdpPageComponent {
  constructor(private router: Router) {}

  redirectHandler(event: string) {
    this.router.navigate([event]);
  }
}
