const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  req.session.email = `eduard.mazo@gmail.com`
  res.send(`Hello from server PORT => ${process.env.PORT}`);
})

module.exports = router;