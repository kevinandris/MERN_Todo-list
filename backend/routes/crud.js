const express = require('express');
const router = express.Router()

router.route('/');
router.route('/:id')

module.exports = router;