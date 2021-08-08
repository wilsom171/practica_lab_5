const express = require('express')
const path = require('path')
const http = require('http')
const socket = require('socket.io')

const app = express()
var server = http.createServer(app)
const io = socket(server)

app.set('port', process.env.port || 5000)
app.use(express.static(path.join(__dirname, '../public')))

require('./socket')(io)

server = app.listen(process.env.PORT || 5000, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
});