import {
  AuthService,
  LanguageService,
  OccEndpointsService,
  ProductService,
  RoutingService,
  SiteContextParamsService,
  StatePersistenceService,
  UserService,
} from '@spartacus/core';
import { CurrentProductService, IconComponent } from '@spartacus/storefront';
import { NgxAimSapComparePluginModule } from 'ngx-aim-sap-compare-plugin';
import { Config as PluginConfig } from 'ngx-aim-sap-compare-plugin/lib/config/config-tokens';

const pluginConfig: PluginConfig = {
  serviceProviders: [
    {
      serviceName: 'AuthService',
      serviceClass: AuthService,
    },
    {
      serviceName: 'CurrentProductService',
      serviceClass: CurrentProductService,
    },
    {
      serviceName: 'LanguageService',
      serviceClass: LanguageService,
    },
    {
      serviceName: 'OccEndpointsService',
      serviceClass: OccEndpointsService,
    },
    {
      serviceName: 'ProductService',
      serviceClass: ProductService,
    },
    {
      serviceName: 'RoutingService',
      serviceClass: RoutingService,
    },
    {
      serviceName: 'SiteContextParamsService',
      serviceClass: SiteContextParamsService,
    },
    {
      serviceName: 'StatePersistenceService',
      serviceClass: StatePersistenceService,
    },
    {
      serviceName: 'UserService',
      serviceClass: UserService,
    },
  ],
  cxComponents: {
    CxIconComponent: {
      component: IconComponent,
    },
  },
};

export default NgxAimSapComparePluginModule.withConfig(pluginConfig);
