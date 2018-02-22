/**
 * Created by adrianaldairleyvasanchez on 2/21/18.
 */
'use strict';
//Modules
const config = require('./app/configuration/global-configuration');
var roomHandler = require('./app/helpers/room-handler');
var boot = require('./app/helpers/boot');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || config.SERVER.PORT;
var roomsArray = [];

//Setup app
roomsArray = roomHandler.getAllRooms();
roomHandler.setupSupportRoom(io);
roomHandler.setupAllRooms(roomsArray);
boot(app, io, roomsArray);

// Running the server.
http.listen(port, function(){
    console.log('listening on *:' + port);
});