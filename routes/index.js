var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/json', (rq, res) => {
  res.send('Hi hi lagi ini rahma');
});

module.exports = router;
