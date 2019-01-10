const express = require('express');

const router = express.Router();
const plantController = require('../controllers').plantController;

router.get('/', plantController.list);

module.exports = router;
