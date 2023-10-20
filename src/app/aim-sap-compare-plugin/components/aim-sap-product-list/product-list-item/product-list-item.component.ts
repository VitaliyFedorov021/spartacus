import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ProductListItemComponent,
  ProductListItemContext,
  ProductListItemContextSource
} from '@spartacus/storefront';

@Component({
  selector: 'aim-sap-product-list-item',
  templateUrl: './product-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ProductListItemContextSource,
    {
      provide: ProductListItemContext,
      useExisting: ProductListItemContextSource
    }
  ],
  styleUrls: ['./product-list-item.component.scss']
})
export class AimSapProductListItemComponent extends ProductListItemComponent {}
