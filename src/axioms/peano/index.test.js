const { describe, it, expect } = require('@jest/globals')

const random = require('../../helpers/random')
const checkers = require('../../helpers/checkers')

expect.extend({
  toBeNatural (received) {
    const pass = checkers.isNatural(received)

    if (pass) {
      return {
        message: () => `expected ${received} not to be a natural`,
        pass
      }
    } else {
      return {
        message: () => `expected ${received} to be a natural`,
        pass
      }
    }
  }
})

describe('Peano axioms', () => {
  const S = x => x + 1

  it('For every natural number x, x = x. That is, equality is reflexive.', () => {
    const x = random.natural()

    expect(x).toBe(x)
  })

  it('For all natural numbers x and y, if x = y, then y = x. That is, equality is symmetric.', () => {
    const x = random.natural()
    const y = x

    if (x === y) {
      expect(y === x).toBe(true)
    }
  })

  it('For all natural numbers x, y and z, if x = y and y = z, then x = z. That is, equality is transitive.', () => {
    const x = random.natural()
    const y = x
    const z = y

    if (x === y && y === z) {
      expect(x === z).toBe(true)
    }
  })

  it('For all a and b, if b is a natural number and a = b, then a is also a natural number. That is, the natural numbers are closed under equality.', () => {
    const b = random.natural()
    const a = b

    expect(a).toBeNatural()
  })

  it('For every natural number n, S(n) is a natural number. That is, the natural numbers are closed under S.', () => {
    const n = random.natural()

    expect(S(n)).toBeNatural()
  })

  it('For all natural numbers m and n, m = n if and only if S(m) = S(n). That is, S is an injection.', () => {
    const m = random.natural()
    const n = random.natural()

    expect(m === n).toBe(S(m) === S(n))
  })

  it('For every natural number n, S(n) = 0 is false. That is, there is no natural number whose successor is 0.', () => {
    const n = random.natural()

    expect(S(n)).not.toBe(0)
  })

  describe('Addition', () => {
    it('a + 0 = a', () => {
      const a = random.natural()

      expect(a + 0).toBe(a)
    })

    it('a + S(b) = S(a + b)', () => {
      const a = random.natural()
      const b = random.natural()

      expect(a + S(b)).toBe(S(a + b))
    })
  })
})
