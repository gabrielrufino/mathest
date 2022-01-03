const faker = require('faker')

module.exports = {
  natural: () => faker.datatype.number({ min: 0 })
}
