var express = require('express');
var http = require('http');
var redis = require('redis');
var r = require('rethinkdb');
var pg = require('pg');
var path = require('path');

var app = express();



// var client = redis.createClient(
//   process.env.REDIS_1_PORT_6379_TCP_PORT || 6379,
//   process.env.REDIS_1_PORT_6379_TCP_ADDR || '127.0.0.1'
// );

/*
add postgres config here - connect to client
*/
var connectionString = process.env.DATABASE_URL || 'postgres://sift:sift@localhost:5432';

var pgClient = new pg.Client(connectionString); 

// /*
// add rethink config here - connect to client
// */
var rClient = null;
r.connect({ host: 'rethink', port: 28015, db: 'apiTables'}, function (err, conn) {
  if (err) throw err;
  connection = conn;
  r.dbCreate('apiTables').run(conn, function(err, conn) {
    console.log('Tables created')
  })
})




app.get('*', function(req, res, next) {
  res.send('hi')
});

http.createServer(app).listen(process.env.PORT || 3000, function() {
  console.log('Listening on port ' + (process.env.PORT || 3000));
});