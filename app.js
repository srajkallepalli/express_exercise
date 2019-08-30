var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var userService = require("./UserService");

app.use(bodyParser.json())

var port = process.env.PORT || 3000;

app.get('/users', (req, res) => {
    var users = userService.getAll();
    res.send(users);
})

app.get('/users/:id', (req, res) => {
    var id = Number(req.params.id);
    var userDetails = userService.getUserById(id)
    res.send(userDetails);
})

app.put('/users', (req, res) => {
    var id = (req.body);
    var addUser = userService.addUser(id);
    res.send(addUser);
})

app.delete('/users/:id', (req, res) => {
    var id = Number(req.params.id);
    userService.deleteUser(id);
    res.status(204).end();
})








app.listen(port, () => {
})