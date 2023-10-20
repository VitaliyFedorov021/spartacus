import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CmsPageGuard, AddToCartModule } from '@spartacus/storefront';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

import {
  AimSapComparisonPageModule as ComparisonPageModule,
  AimSapSharedDirectivesModule,
  AimSapPendingChangesGuard
} from 'ngx-aim-sap-compare-plugin';

import { AimSapComparisonPageComponent } from './aim-sap-comparison-page.component';

const comparisonPageRoute: Routes = [
  {
    path: 'comparison/:code',
    component: AimSapComparisonPageComponent,
    canActivate: [CmsPageGuard],
    canDeactivate: [AimSapPendingChangesGuard]
  }
];

@NgModule({
  declarations: [AimSapComparisonPageComponent],
  imports: [
    AddToCartModule,
    CommonModule,
    RouterModule.forRoot(comparisonPageRoute),
    ShareButtonsModule,
    ShareIconsModule,
    ComparisonPageModule,
    AimSapSharedDirectivesModule
  ]
})
export class AimSapComparisonPageModule {}
