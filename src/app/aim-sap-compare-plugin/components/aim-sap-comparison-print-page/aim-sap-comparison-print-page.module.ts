import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CmsPageGuard } from '@spartacus/storefront';

import { AimSapComparisonPrintPageModule as ComparisonPrintPageModule } from 'ngx-aim-sap-compare-plugin';

import { AimSapComparisonPrintPageComponent } from './aim-sap-comparison-print-page.component';

const comparisonPrintPageRoute: Routes = [
  {
    path: 'comparison/print/:code',
    component: AimSapComparisonPrintPageComponent,
    canActivate: [CmsPageGuard],
  },
  {
    path: 'comparison/print/:code/:pdp',
    component: AimSapComparisonPrintPageComponent,
    canActivate: [CmsPageGuard],
  },
];

@NgModule({
  declarations: [AimSapComparisonPrintPageComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(comparisonPrintPageRoute),
    ComparisonPrintPageModule,
  ],
})
export class AimSapComparisonPrintPageModule {}
