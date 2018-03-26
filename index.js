const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(express.static('client'));
app.use(bodyParser.json({limit: '20mb'}));
app.use(bodyParser.urlencoded({limit: '20mb', extended: true}));


app.post('/palidromeword', (request, response) => {

  let original = request.body.expression.trim().toUpperCase();
  let pharse = request.body.expression.trim().replace(/ /g,'');
  let reversed = pharse.split("").reverse().join("");

  if(pharse == reversed) {
    response.status(200).send(original)
  } else {
    response.status(400).send(original)
  }
});

app.listen(port, () => {
  let start = new Date();
  console.log('----------------------------------------------------');
  console.log(' Server running in port: '+port);
  console.log(' start at : '+start);
  console.log('----------------------------------------------------');
});
