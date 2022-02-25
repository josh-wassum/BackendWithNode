const express = require('express');

const professionalsController = require('../controllers/professionals');

const router = express.Router();

router.get('/', professionalsController.getProfessionals);

module.exports = router;