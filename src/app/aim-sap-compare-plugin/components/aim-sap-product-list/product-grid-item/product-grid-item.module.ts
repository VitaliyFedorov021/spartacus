import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nModule, UrlModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';
import {
  AddToCartModule,
  MediaModule,
  OutletModule,
  StarRatingModule
} from '@spartacus/storefront';

import { AimSapCheckboxModule } from 'ngx-aim-sap-compare-plugin';

import { AimSapProductGridItemComponent } from './product-grid-item.component';

@NgModule({
  declarations: [AimSapProductGridItemComponent],
  exports: [AimSapProductGridItemComponent],
  imports: [
    CommonModule,
    UrlModule,
    RouterModule,
    MediaModule,
    OutletModule,
    StarRatingModule,
    I18nModule,
    AddToCartModule,
    AimSapCheckboxModule
  ]
})
export class AimSapProductGridItemModule {}
