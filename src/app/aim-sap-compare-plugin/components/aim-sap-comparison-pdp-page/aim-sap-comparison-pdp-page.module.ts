import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

import { AimSapComparisonTablePdpModule } from 'ngx-aim-sap-compare-plugin';

import { AimSapComparisonPdpPageComponent } from './aim-sap-comparison-pdp-page.component';

@NgModule({
  declarations: [AimSapComparisonPdpPageComponent],
  exports: [AimSapComparisonPdpPageComponent],
  imports: [
    CommonModule,
    ShareButtonsModule,
    ShareIconsModule,
    AimSapComparisonTablePdpModule
  ]
})
export class AimSapComparisonPdpPageModule {}
