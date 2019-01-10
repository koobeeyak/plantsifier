
const employeesSeed = require('../seed-data/employees-seed');
const plantsSeed = require('../seed-data/plants-seed');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Plants',
    plantsSeed,
    { returning: true },
  ).then(plants => queryInterface.bulkInsert(
    'Employees',
    employeesSeed,
    {},
  )),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Employees', null, {})
    .then(() => queryInterface.bulkDelete('Plants', null, {})),
};
