var express = require('express')
var bp = require('body-parser')
var app = express()
let server = require('http').createServer(app)
var cors = require('cors')
var port = process.env.PORT || 3000


//Changes by brian will be added

var whitelist = ['http://localhost:8080', 'http://kanban-fun.herokuapp.com'];
var corsOptions = {
  origin: function(origin, callback){
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted)
  },
  credentials: true
}

app.use(cors(corsOptions))

app.use(express.static(__dirname + "/../www/dist"))

require('./server-assets/db/mlab-config')

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

var auth = require('./server-assets/auth/routes')
app.use(auth.session)
app.use(auth.router)



app.use((req, res, next)=>{
  console.log(req)
  if(!req.session.uid){
    return res.status(401).send({
      error: 'please login to continue'
    })
  }
  next()
})

// var users = require('./server-assets/routes/users')
var boards = require('./server-assets/routes/board')
var lists = require('./server-assets/routes/list')
var comments = require('./server-assets/routes/comment')
var tasks = require('./server-assets/routes/task')


// app.use(users.router)
app.use(boards.router)
app.use(lists.router)
app.use(tasks.router)
app.use(comments.router)

//catch all
app.get('*', (req, res, next) => {
  res.status(404).send({ error: 'No matching routes' })
})

//port listener
app.listen(port, () => {
  console.log('server running on port', port)
})