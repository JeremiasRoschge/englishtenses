const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('present/presentcontinuous.ejs')
})

module.exports = router;