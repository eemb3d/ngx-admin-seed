import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';

import { AnalyticsService } from './analytics.service';

describe('AnalyticsService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    providers: [AnalyticsService, Location]
  }));

 /* 
 it('should do something TBD', () => {
    const service: AnalyticsService = TestBed.inject(AnalyticsService);
    expect(service.trackPageViews()).toBeDefined();
  });
  it('should be created', () => {
    const service: AnalyticsService = TestBed.inject(AnalyticsService);

    expect(service.trackPageViews()).toBeTruthy();
  });

  it('should be created', () => {
    const service: AnalyticsService = TestBed.inject(AnalyticsService);
    expect(service).toBeTruthy();
  }); */

});