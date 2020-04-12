import { PluralPipe } from './plural.pipe';

describe('PluralPipe', () => {

  it('create an instance', () => {
    const pipe = new PluralPipe();
    expect(pipe).toBeTruthy();
  });
    
  it('should return the plural word of "house"', () => {
    const pipe = new PluralPipe();
    let transformedValue = pipe.transform(2, "house");
    expect(transformedValue).toEqual('2 houses');
  });
});