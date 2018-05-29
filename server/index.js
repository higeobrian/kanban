var express = require('express')
var bp = require('body-parser')
var app = express()
var cors = require('cors')
var port = 3000

app.use(cors())

require('./server-assets/db/mlab-config')

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

var auth = require('./server-assets/auth/routes')
app.use(auth.session)
app.use(auth.router)

//var users = require('./server-assets/routes/users')
//var songs = require('./server-assets/routes/songs')
var boards = require('./server-assets/routes/board')
var lists = require('./server-assets/routes/list')
var comments = require('./server-assets/routes/comment')
var tasks = require('./server-assets/routes/task')






//app.use(users.router)
//app.use(songs.router)
app.use(boards.router)


//catch all
app.get('*', (req, res, next) => {
  res.status(404).send({ error: 'No matching routes' })
})

//port listener
app.listen(port, () => {
  console.log('server running on port', port)
})