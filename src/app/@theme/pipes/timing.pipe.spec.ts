import { TimingPipe } from './timing.pipe';

describe('TimingPipe', () => {

  it('create an instance', () => {
    const pipe = new TimingPipe();
    expect(pipe).toBeTruthy();
  });
  
  it('should return "02:04" from number "124"', () => {
    const pipe = new TimingPipe();
    let transformedValue = pipe.transform(124);
    expect(transformedValue).toEqual('02:04');
  });

  it('should return "0" for value less then 10, like number "2"', () => {
    const pipe = new TimingPipe();
    let transformedValue = pipe.initZero(2);
    expect(transformedValue).toEqual('0');
  });

});
