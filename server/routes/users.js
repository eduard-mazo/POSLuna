const express = require('express');
const request = require('request');
const parse = require('csv-parse');
const redis = require("redis");
const client = redis.createClient();

client.on("error", function(error) {
  console.error(error);
});

const router = express.Router();
const output = []


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
    // Create the parser
    const parser = parse({
      delimiter: ','
    })
    // Use the readable stream api
    parser.on('readable', function(){
      let record
      while (record = parser.read()) {
        output.push(record)
      }
    })
    // Catch any error
    parser.on('error', function(err){
      console.error(err.message)
    })
    // When we are done, test that the parsed output matched what expected
    parser.on('end', function(){
      console.error('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      // res.send(`Despacho para (${dateString.join('/')}) => 
      // code: ${response.statusCode}
      // ${output}`);
      if (error) throw error;
      if (output) {
        client.setex(dateString.join('/'), 3600, JSON.stringify(output), (e, data) => {
          console.log(e);
          if (e) res.send('bad request') 
          if (data) {
            console.log(`saving on Cache => ${dateString.join('/')}`)
            res.send(output);
          }
        });
      }
    })
    // Write data to the stream
    parser.write(body)
    // Close the readable stream
    parser.end()
  });
});

module.exports = router;