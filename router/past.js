const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('past/past.ejs')
});


module.exports = router;

