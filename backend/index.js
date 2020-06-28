const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./api')
const port = 4000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
})

app.get('/', (request, response) => {
  response.json({ info: 'API in node.js, express and postgres'})
})

app.get('/users', db.getUsers)
app.post('/signup', db.signUp)
app.post('/signin', db.signIn)


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
