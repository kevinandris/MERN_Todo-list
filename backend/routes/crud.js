const express = require('express');
const router = express.Router()

const { getAllData, createData, getOneItem, updateAllData, deleteAllData } = require('../controllers/crud')

router.route('/').get(getAllData);
router.route('/:id')

module.exports = router;