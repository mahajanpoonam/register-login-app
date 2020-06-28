const { response } = require('express')

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  password: 'postsql!1',
  host: 'localhost',
  database: 'my_users_db',
  port: 5432,
})

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const signUp = (request, response) => {
  const email = request.body.email
  const password = request.body.password
  const query = `INSERT INTO users (email, password) VALUES ($1, crypt($2, gen_salt('bf')) )`
  pool.query(query, [email, password], (error, results) => {
    if (error) {
      throw error
    }
    if (results.rowCount == 1) {
      //console.log('pool.query():', results) 
      response.status(200).send({
        message: "You are registered successfully."
      })
    }
  })
}

const signIn = (request, response) => {
  const email = request.body.email
  const password = request.body.password
  pool.query('SELECT * FROM users WHERE email = $1 AND password = crypt($2, password)', [email, password], (error, results) => {
    if (error) {
      throw error
    }
    if (results.rowCount == 1) {
        response.status(200).send({
        message: "Signed in successfully."
      })
    }
    else {
      response.status(200).send({
        message: "Email or password is incorrect."
      })
    }
  })
}

module.exports = {
  getUsers,
  signUp,
  signIn
}


