const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.load({
    path: '.env'
});

const app = express();
const server = require("http").createServer();

app.set('port', process.env.PORT || 3333);
app.use(compression());
app.use(logger('dev'));
app.use(cors({
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin']
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

server.listen(app.get('port'), function () {
    console.log('Servidor rodando na porta ' + app.get('port') + ' em modo ' + app.get('env'));
});

let io = require('socket.io')(server, {
  // below are engine.IO options
  pingInterval: 5000,
  pingTimeout: 3000
});

var companies = []

io.on('connection', (socket) => {
  companies = socket
  companies.data = [
    {
      'id': 0,
      'name': 'Ducks Sports',
      'value': 16
    },
    {
      'id': 1,
      'name': 'Samsung',
      'value': 12
    },
    {
      'id': 2,
      'name': 'Bar do satan',
      'value': 25
    },
    {
      'id': 3,
      'name': 'Nike',
      'value': 20
    },
    {
      'id': 4,
      'name': 'Google',
      'value': 21
    }
  ]

  socket.on('UpdateCompanies', (data) => {
    let dataReturn = []

    companies.data.forEach((item) => {
      data.forEach((element) => {
        if (item.id === element.id) {
          item.value = element.value

          dataReturn.push({'name': item.name || element.name, 'value': item.value || element.value})
        }
      })
    })

    companies.emit('NewData', dataReturn)
  })

  socket.on('GetData', (data) => {
    let dataReturn = []

    companies.data.forEach((item) => {
      dataReturn.push({'id': item.id, 'name': item.name, 'value': item.value})
    })

    companies.emit('NewData', dataReturn)
  })
})

module.exports = app;