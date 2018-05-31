var expressSession = require("express-session");
var mongoStore = require("connect-mongodb-session")(expressSession);

var store = new mongoStore({
  uri: "mongodb://Jasper:student@ds133550.mlab.com:33550/kanban", //CHANGE ME!!!!!! already changed just a friendly reminder
  collection: "Sessions"
});

store.on("error", function(err) {
  console.log("[SESSION ERROR]", err);
});

// @ts-ignore
var session = expressSession({
  secret: "We are the knights who say icky icky pickang knee womb!!", //CHANGE ME!!!! already changed just a friendly reminder
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 * 52 * 2,
  },
  store,
  resave: true,
  saveUninitialized: true
});

module.exports = session;