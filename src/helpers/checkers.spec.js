const { describe, it, expect } = require('@jest/globals')

const checkers = require('./checkers')
const random = require('./random')

describe('helpers.checkers', () => {
  describe('.isNatural()', () => {
    it('Should return false for non numbers inputs', () => {
      const returned = checkers.isNatural('Gabriel Rufino')

      expect(returned).toBe(false)
    })

    it('Should return false for negative numbers', () => {
      const returned = checkers.isNatural(-10)

      expect(returned).toBe(false)
    })

    it('Should return true for natural numbers', () => {
      const returned = checkers.isNatural(random.natural())

      expect(returned).toBe(true)
    })
  })
})
