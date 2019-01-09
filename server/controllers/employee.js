const Employee = require('../db/models').Employee;

module.exports = {
  create(req, res) {
    return Employee
      .create(req.body)
      .then((employee) => res.status(201).send(employee))
      .catch((error) => res.status(400).send(error));
  },
  list(req, res) {
    return Employee
      .findAll()
      // TODO log with Morgan, fix indents
      .then((employees) => res.status(200).send(employees))
      .catch((error) => res.status(400).send(error));
  }
};
