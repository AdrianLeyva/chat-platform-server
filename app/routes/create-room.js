/**
 * Created by adrianaldairleyvasanchez on 2/21/18.
 */
'use strict';
//Modules
var handler = require('../helpers/room-handler');

/*
    This module is responsible for new rooms creation.
 */
module.exports = function (app, io, roomsArray) {
    app.post('/chat/create-new-room/:name', function (req, res) {
        let roomName = req.params.name;
        let newRoom = io.of(roomName);

        newRoom.on('connection', function(socket){
            console.log('someone connected in ' + roomName);
            socket.on('chat-message', function (message, user) {
                newRoom.emit('chat-message', message, user);
            });
        });

        roomsArray.push(newRoom);
        handler.setupAllRooms(roomsArray);
        res.end();
    });
};
