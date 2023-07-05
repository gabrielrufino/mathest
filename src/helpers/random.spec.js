const random = require('./random');

describe('helpers.random', () => {
  describe('.natural()', () => {
    it('Should have a function "natural" defined', () => {
      expect(random.natural).toBeDefined();
    });

    it('Should return a number greater than or equal to zero', () => {
      const returned = random.natural();

      expect(returned).toBeGreaterThanOrEqual(0);
    });
  });
});
