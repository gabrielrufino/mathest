module.exports = {
  isNatural: x => typeof x === 'number' && x >= 0 && x % Math.floor(x) === 0
}
