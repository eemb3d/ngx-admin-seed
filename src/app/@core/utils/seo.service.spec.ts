import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NB_DOCUMENT } from '@nebular/theme';

import { SeoService } from './seo.service';

describe('SeoService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, HttpClientTestingModule],
    providers: [
      SeoService,
      { provide: NB_DOCUMENT }
    ]
  }));

/*   it('should be created', () => {
    const service: SeoService = TestBed.inject(SeoService);
    expect(service).toBeTruthy();
  }); */

});