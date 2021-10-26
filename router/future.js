const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('future/future.ejs')
});


module.exports = router;

