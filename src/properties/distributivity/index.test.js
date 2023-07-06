const random = require('../../helpers/random');

describe('Distributive property', () => {
  it('Multiplication', () => {
    const x = random.real();
    const y = random.real();
    const z = random.real();

    expect(x * (y + z)).toBe(x * y + x * z);
  });
});
