import { TemperatureHumidityService } from './temperature-humidity.service';

describe('TemperatureHumidityService', () => {
  const service: TemperatureHumidityService = new TemperatureHumidityService();

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getListData should return more then two value from observable',
    (done: DoneFn) => {
      service.getTemperatureData().subscribe(
        value => {
          expect(value).toEqual({
            value: 24,
            min: 12,
            max: 30,
          });
          done();
        },
        error => console.error(error)
      );
    });

  it('#getListData should return more then two value from observable',
    (done: DoneFn) => {
      service.getHumidityData().subscribe(
        value => {
          expect(value).toEqual({
            value: 87,
            min: 0,
            max: 100,
          });
          done();
        },
        error => console.error(error)
      );
    });
});