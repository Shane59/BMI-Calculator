const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  res.render('bmi');
});

app.post('/', (req, res) => {
  const bmi = req.body.weight / Math.pow((req.body.height / 100), 2);
  res.render('bmi', {bmi: bmi.toFixed(2)});
});

app.listen(3000, () => {
  console.log("app is running on port 3000!");
});