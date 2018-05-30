var express = require('express')
var bp = require('body-parser')
var app = express()
var cors = require('cors')
var port = 3000

var whitelist = ['http://localhost:8080'];
var corsOptions = {
  origin: function(origin, callback){
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted)
  },
  credentials: true
}



app.use(cors(corsOptions))

require('./server-assets/db/mlab-config')

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

var auth = require('./server-assets/auth/routes')
app.use(auth.session)
app.use(auth.router)



app.use((req, res, next)=>{
  if(!req.session.uid){
    return res.status(401).send({
      error: 'please login to continue'
    })
  }
})

//var users = require('./server-assets/routes/users')
//var songs = require('./server-assets/routes/songs')
var boards = require('./server-assets/routes/board')
var lists = require('./server-assets/routes/list')
var comments = require('./server-assets/routes/comment')
var tasks = require('./server-assets/routes/task')






//app.use(users.router)
//app.use(songs.router)
app.use(boards.router)
app.use(lists.router)


//catch all
app.get('*', (req, res, next) => {
  res.status(404).send({ error: 'No matching routes' })
})

//port listener
app.listen(port, () => {
  console.log('server running on port', port)
})