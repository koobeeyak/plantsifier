const Plant = require('../db/models').Plant;

module.exports = {
  create(req, res) {
    return Plant
      .create(req.body)
      .then((plant) => res.status(201).send(plant))
      .catch((error) => res.status(400).send(error));
  },
  list(req, res) {
    return Plant
      .findAll()
      // TODO log with Morgan, fix indents
      .then((plants) => res.status(200).send(plants))
      .catch((error) => res.status(400).send(error));
  }
};
