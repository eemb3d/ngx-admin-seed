import { TestBed } from '@angular/core/testing';
import { LayoutService } from './layout.service';

describe('LayoutService', () => {
  const service: LayoutService = new LayoutService();

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

/*   it('should be created', () => {
    expect(service.changeLayoutSize()).toBeTruthy();
  });

  it('should be created', () => {
    expect(service.onChangeLayoutSize()).toBeTruthy();
  });
 */
});