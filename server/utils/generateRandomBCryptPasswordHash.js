const generateRandomBCryptPasswordHash = () => {
  // generate random password hashes
  // we will integrate BCrypt package into our app and follow their hashing practices
  // so far, this is just for sample seed data
  // https://github.com/kelektiv/node.bcrypt.js
  const hashCharSet = './ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$';
  const hashLength = 60;
  const hashArr = new Array(hashLength);
  for (let i = 0; i < hashLength; i++) {
    const randomIndex = Math.floor(Math.random() * hashCharSet.length);
    hashArr.push(hashCharSet.charAt(randomIndex));
  }
  return hashArr.join('');
};

module.exports = generateRandomBCryptPasswordHash;
