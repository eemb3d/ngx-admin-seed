import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StateService } from './state.service';
import { NbLayoutDirectionService } from '@nebular/theme';

describe('StateService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [StateService],
    declarations: [ NbLayoutDirectionService ],
  }));

/*   it('should be created', () => {
    const service: StateService = TestBed.inject(StateService);
    expect(service).toBeTruthy();
  }); */

});
