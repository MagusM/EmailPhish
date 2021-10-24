const bodyParser = require('body-parser');
const express = require('express')
const { sendMail } = require('./services/email')
const jwt = require('jsonwebtoken');
var cors = require('cors')
var fs = require('fs');

const app = express()
const port = 2000

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API route
app.post('/sendMail', async (req, res) => {
  // rcpt, userEmail
  await sendMail(req.body.email, req.body.rcpt)
  res.send("All good")
})

app.post('/login', async (req, res) => {
  loginResponse = await login(req.body.email, req.body.password)
  if (loginResponse) {
    const token = jwt.sign({ email:req.body.email }, 'login');
    res.send(token)
  } else {
    res.send("unauthorized")
  }
})

app.get('/emails/:userEmail', async (req, res) => {
  userEmails = await getAllEmailsByUser(userEmail)
  res.send(userEmails);
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})