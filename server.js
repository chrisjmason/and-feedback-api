let express = require('express');
let bodyParser = require('body-parser');
let feedbackController = require('./src/controllers/feedbackController/feedbackController.js');

let app = express();
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send({"message": "Everything working!"}));

app.post('/feedback', feedbackController.addFeedback);

app.listen(4200);

console.log("listening on port 4200 :)");

module.exports = app;
