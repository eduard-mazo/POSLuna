const express = require('express');
const request = require('request');
const router = express.Router();

router.get('/users', (req, res) => {
  req.session.email = `eduard.mazo@gmail.com`
  res.send(`Hello from server PORT => ${process.env.PORT}`);
});

router.get('/xm', (req, res) => {

  let dateString = new Date().toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).split('/');

  var urls = `http://www.xm.com.co/despachonacional/${dateString[2]}-${dateString[0]}/dDEC${dateString[0]}${dateString[1]}_NAL.TXT`;
  request(urls, function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    res.send(`Despacho para (${dateString.join('/')}) => 
    code: ${response.statusCode}
    ${body}`);
  });
})

module.exports = router;