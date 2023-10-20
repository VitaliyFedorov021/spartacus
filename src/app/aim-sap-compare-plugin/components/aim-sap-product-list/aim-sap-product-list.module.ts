import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nModule } from '@spartacus/core';
import {
  ListNavigationModule,
  PaginationModule,
  ProductListModule
} from '@spartacus/storefront';

import { AimSapWeightsModule } from 'ngx-aim-sap-compare-plugin';

import { AimSapProductListItemModule } from './product-list-item/product-list-item.module';
import { AimSapProductGridItemModule } from './product-grid-item/product-grid-item.module';

import { AimSapProductListComponent } from './aim-sap-product-list.component';

@NgModule({
  declarations: [AimSapProductListComponent],
  imports: [
    CommonModule,
    I18nModule,
    PaginationModule,
    ListNavigationModule,
    ProductListModule,
    AimSapProductListItemModule,
    AimSapProductGridItemModule,
    AimSapWeightsModule
  ]
})
export class AimSapProductListModule {}
