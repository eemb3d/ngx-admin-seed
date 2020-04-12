import { RoundPipe } from './round.pipe';

describe('RoundPipe', () => {

  it('create an instance', () => {
    const pipe = new RoundPipe();
    expect(pipe).toBeTruthy();
  });
  
  it('should return a runded number. From 33.79 to "34"', () => {
    const pipe = new RoundPipe();
    let transformedValue = pipe.transform(33.79);
    expect(transformedValue).toEqual(34);
  });
});
