import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {

  it('create an instance', () => {
    const pipe = new CapitalizePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return capitalized string. From "anna" to "Anna"', () => {
    const pipe = new CapitalizePipe();
    const transformedValue = pipe.transform('anna');
    expect(transformedValue).toEqual('Anna');
  });

});
