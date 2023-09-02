const express = require('express');
const router = express.Router()

const { getAllData, createData, getOneItem, updateAllData, deleteAllData } = require('../controllers/crud')

router.route('/').get(getAllData).post(createData);
router.route('/:id').get(getOneItem)

module.exports = router;