const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('past/simplepast.ejs')
})

module.exports = router;

