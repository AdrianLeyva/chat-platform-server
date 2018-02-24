/**
 * Created by adrianaldairleyvasanchez on 2/21/18.
 */
'use strict';
//Modules
const config = require('./app/configuration/global-configuration');
const socketHandler = require('./app/helpers/socket-listener');
var ClientHashMap = require('./app/helpers/clientHashMap');
var hashMap = new ClientHashMap();
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || config.SERVER.PORT;

/*
    Client and Server sockets are connected.
 */
io.on('connection', function(socket) {
    socketHandler.activateListeners(io, socket, hashMap);
});

// Running the server.
http.listen(port, function(){
    console.log('listening on *:' + port);
});