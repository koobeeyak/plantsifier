const generateRandomBCryptPasswordHash = require('../../utils').generateRandomBCryptPasswordHash;

const createdAndUpdatedAt = {
  createdAt: new Date(),
  updatedAt: new Date()
}

module.exports = [
  {
    username: 'andré',
    password: generateRandomBCryptPasswordHash(),
    ...createdAndUpdatedAt
  },
  {
    username: 'jake',
    password: generateRandomBCryptPasswordHash(),
    ...createdAndUpdatedAt
  },
  {
    username: 'shaneeza',
    password: generateRandomBCryptPasswordHash(),
    ...createdAndUpdatedAt
  },
  {
    username: 'kevin',
    password: generateRandomBCryptPasswordHash(),
    ...createdAndUpdatedAt
  }
]
