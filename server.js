var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/images'));

// создаём маршрут для главной страницы
// http://localhost:8080/
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// запускаем сервер на порту 8080
app.listen(3000);
// отправляем сообщение
console.log('started');