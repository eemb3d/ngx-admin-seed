import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from './module-import-guard';
import {
  AnalyticsService,
  LayoutService,
  PlayerService,
  SeoService,
  StateService,
} from './utils';

import { ElectricityData } from './data/electricity';
import { ElectricityService } from './mock/electricity.service';

import { TemperatureHumidityData } from './data/temperature-humidity';
import { TemperatureHumidityService } from './mock/temperature-humidity.service';

import { MockDataModule } from './mock/mock-data.module';

const DATA_SERVICES = [
  { provide: ElectricityData, useClass: ElectricityService },
  { provide: TemperatureHumidityData, useClass: TemperatureHumidityService },
];

export const NB_CORE_PROVIDERS = [
  ...MockDataModule.forRoot().providers,
  ...DATA_SERVICES,
  AnalyticsService,
  LayoutService,
  PlayerService,
  SeoService,
  StateService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
