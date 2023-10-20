import { Component } from '@angular/core';
import {
  ProductGridItemComponent,
  ProductListItemContext,
  ProductListItemContextSource
} from '@spartacus/storefront';

@Component({
  selector: 'aim-sap-product-grid-item',
  templateUrl: './product-grid-item.component.html',
  providers: [
    ProductListItemContextSource,
    {
      provide: ProductListItemContext,
      useExisting: ProductListItemContextSource
    }
  ],
  styleUrls: ['./product-grid-item.component.scss']
})
export class AimSapProductGridItemComponent extends ProductGridItemComponent {}
