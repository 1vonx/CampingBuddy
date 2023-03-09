import { PriceValuePipe } from './price-value.pipe';

describe('PriceValuePipe', () => {
  it('create an instance', () => {
    const pipe = new PriceValuePipe();
    expect(pipe).toBeTruthy();
  });
});
