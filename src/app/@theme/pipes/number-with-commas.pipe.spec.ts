import { NumberWithCommasPipe } from './number-with-commas.pipe';

describe('NumberWithCommasPipe', () => {

  it('create an instance', () => {
    const pipe = new NumberWithCommasPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return number with commas. From 33 to "33"', () => {
    const pipe = new NumberWithCommasPipe();
    const transformedValue = pipe.transform(33);
    expect(transformedValue).toEqual('33');
  });
});
