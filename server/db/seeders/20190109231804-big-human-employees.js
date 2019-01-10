'use strict';
const employeesSeed = require('../seed-data/employees-seed');
const plantsSeed = require('../seed-data/plants-seed');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Plants',
      plantsSeed,
      {returning: true}
    ).then((plants) => queryInterface.bulkInsert(
      'Employees',
      employeesSeed,
      {}
    ));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Employees', null, {})
      .then(() => queryInterface.bulkDelete('Plants', null, {}));
  }
};
