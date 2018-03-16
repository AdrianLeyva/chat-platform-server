/**
 * Created by adrianaldairleyvasanchez on 3/4/18.
 */
'use strict';
const booter = require('../../helpers/booter');
const SocketHandler = require('../../helpers/socket-handler');

module.exports = function (io, hashMap, roomHashMap, app) {
    /*
     Client and Server sockets are connected.
     Initialize all event listeners.
     */
    io.on('connection', function(socket) {
        console.log('user connected');
        let socketHandler = new SocketHandler(io);
        booter(io, socket, hashMap, roomHashMap, socketHandler, app);
    });
};