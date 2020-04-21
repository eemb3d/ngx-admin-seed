import { ElectricityService } from './electricity.service';

describe('ElectricityService', () => {
  let service: ElectricityService;

  beforeEach(() => {
    service = new ElectricityService();
  });

  it('should be already created', () => {
    expect(service).toBeTruthy();
  });

  it('chartData should be initialized', () => {
    expect(service.chartData).toBeTruthy();
  });

  it('#getListData should return more then two value from observable',
    (done: DoneFn) => {
      service.getListData().subscribe(
        value => {
          expect(Object.keys(value).length).toBeGreaterThanOrEqual(3);
          done();
        },
        error => console.error(error)
      );
    });

  it('#getChartData should return value from observable',
    (done: DoneFn) => {
      service.getChartData().subscribe(
        value => {
          expect(value[0]).toEqual({ label: '', value: 490 });
          done();
        },
        error => console.error(error)
      );
    });
});