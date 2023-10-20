import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SpartacusModule} from './spartacus/spartacus.module';

import {AimSapComparePluginModule} from './aim-sap-compare-plugin/aim-compare-plugin.module';
import {LayoutConfig} from "@spartacus/storefront";
import {ConfigModule, provideDefaultConfig} from "@spartacus/core";
import {
  AimSapProductListComponent,
  AimSapProductListModule
} from "./aim-sap-compare-plugin/components/aim-sap-product-list";
import {
  AimSapComparisonPdpPageComponent,
  AimSapComparisonPdpPageModule
} from "./aim-sap-compare-plugin/components/aim-sap-comparison-pdp-page";
import {AimSapComparisonPrintPageModule} from "./aim-sap-compare-plugin/components/aim-sap-comparison-print-page";
import {AimSapComparisonPageModule} from "./aim-sap-compare-plugin/components/aim-sap-comparison-page";
import {AimSapCheckboxComponent, AimSapWeightsComponent} from "ngx-aim-sap-compare-plugin";

const layoutConfig: LayoutConfig = {
  layoutSlots: {
    ProductDetailsPageTemplate: {
      slots: ['TopHeaderSlot', 'Summary', 'UpSelling', 'Tabs', 'Section4']
    }
  }
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    AimSapComparePluginModule,
    ConfigModule.withConfig(layoutConfig),
    AimSapProductListModule,
    AimSapComparisonPrintPageModule,
    AimSapComparisonPdpPageModule,
    AimSapComparisonPageModule
  ],
  providers: [
    provideDefaultConfig({
      cmsComponents: {
        AddToComparisonFlexComponent: {
          component: AimSapCheckboxComponent
        },
        CMSProductListComponent: {
          component: AimSapProductListComponent
        },
        ProductGridComponent: {
          component: AimSapProductListComponent
        },
        SearchResultsListComponent: {
          component: AimSapProductListComponent
        },
        ListComparisonsComponent: {
          component: AimSapWeightsComponent
        },
        ComparisonProductDetailsPageComponent: {
          component: AimSapComparisonPdpPageComponent
        }
      }
    })
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
