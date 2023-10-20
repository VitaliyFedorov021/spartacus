import { NgModule } from '@angular/core';
import {
  AimSapWeightsModule,
  AimSapNotificationMessageModule,
} from 'ngx-aim-sap-compare-plugin';
import AimPluginConfigModule from './aim-compare-plugin.config';

@NgModule({
  declarations: [],
  imports: [
    AimPluginConfigModule,
    AimSapWeightsModule,
    AimSapNotificationMessageModule,
  ],
  exports: [AimSapNotificationMessageModule],
})
export class AimSapComparePluginModule {}
