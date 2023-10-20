import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nModule, UrlModule } from '@spartacus/core';
import {
  AddToCartModule,
  MediaModule,
  OutletModule,
  StarRatingModule
} from '@spartacus/storefront';
import { RouterModule } from '@angular/router';

import { AimSapCheckboxModule } from 'ngx-aim-sap-compare-plugin';

import { AimSapProductListItemComponent } from './product-list-item.component';

@NgModule({
  declarations: [AimSapProductListItemComponent],
  exports: [AimSapProductListItemComponent],
  imports: [
    CommonModule,
    UrlModule,
    OutletModule,
    RouterModule,
    AddToCartModule,
    StarRatingModule,
    MediaModule,
    I18nModule,
    AimSapCheckboxModule
  ]
})
export class AimSapProductListItemModule {}
