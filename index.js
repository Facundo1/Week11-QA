// Importing express library to create server
const express = require('express')
const app = express()
// library to parse the data that come from the front end
const bodyParser = require("body-parser");
// Port of the server
const port = 4000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const user = {
  email: '',
  name: '',
  password: ''
}

// Endpoints
app.post('/register', (req, res) => {
  var userEmail = req.body.email;
  var userName = req.body.name;
  var password = req.body.password;
  console.log("User saved!: /n the user mail is: " + userEmail + " /n Full name:" + userName + " /n password is " + password);

  res.end("yes");
})

app.put('/login', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})