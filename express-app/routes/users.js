const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  obj = {
    items: [
      {
        id: 1,
        name: 'Ivan'
      },
      {
        id: 2,
        name: 'Darya'
      }
    ]
  }

  res.send(obj);
});

module.exports = router;
