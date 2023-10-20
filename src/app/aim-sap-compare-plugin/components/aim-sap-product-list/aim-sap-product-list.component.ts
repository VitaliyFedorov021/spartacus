import { Component } from '@angular/core';
import { ProductListComponent, ViewModes } from '@spartacus/storefront';

@Component({
  selector: 'cx-product-list',
  templateUrl: './aim-sap-product-list.component.html'
})
export class AimSapProductListComponent extends ProductListComponent {
  handleSetViewMode(mode: string) {
    this.setViewMode(mode as ViewModes);
  }
}
