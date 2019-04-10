const express = require('express');
const request = require('request');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

/******
 * GET bsb tracks
 */
app.get('/bsb.json', (req, res) => {
  request('https://s3-us-west-2.amazonaws.com/anchor-website/challenges/bsb.json', (err, response, body) => {
    if (err) {
      console.log(err);
    } else if (response) {
      console.log("statusCode: ", response.statusCode);
    }
    res.send(body);
  });
});

// Render our React app
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);