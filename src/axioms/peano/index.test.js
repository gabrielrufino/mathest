const { describe, it, expect } = require('@jest/globals')

const random = require('../../helpers/random')

describe('Peano axioms', () => {
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
})
