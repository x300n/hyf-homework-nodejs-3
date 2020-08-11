const express = require('express')
const app = express()
const port = 3000

<<<<<<< HEAD
const users = []

=======
>>>>>>> 37d99dc95f7422292abca6e7e14227d004ab5517
app.get('/', (req, res) => {
  res.send('Hello World!')
})

<<<<<<< HEAD
app.get('/users', (req, res) => {

  res.send(users)
})

=======
>>>>>>> 37d99dc95f7422292abca6e7e14227d004ab5517
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})