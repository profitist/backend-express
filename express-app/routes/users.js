const express = require('express');
const router = express.Router();

users = {
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

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send(users);
});

router.post('/', function(req, res) {
  users.items.push(req.body);
  res.status(201).json(req.body);
  res.send(users);
})

module.exports = router;
