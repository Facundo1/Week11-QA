// Importing express library to create server
const express = require('express')
const app = express()
// library to parse the data that come from the front end
const bodyParser = require("body-parser");
const cors = require('cors');
// Port of the server
const port = 4000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const user = []


// Endpoints
app.post('/register', (req, res) => {

  user.push(req.body.name);
  user.push(req.body.email);
  user.push(req.body.password);
  user.join(", ")
  res.send(user);

})

app.put('/login', (req, res) => {
  console.log(res)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})