/**
 * Created by adrianaldairleyvasanchez on 3/4/18.
 */
'use strict';
const booter = require('../../helpers/booter');
const SocketHandler = require('../../helpers/socket-handler');

module.exports = function (io, hashMap, app) {
    /*
     Client and Server sockets are connected.
     Initialize all event listeners.
     */
    io.on('connection', function(socket) {
        let socketHandler = new SocketHandler(io);
        booter(io, socket, hashMap, socketHandler, app);
    });
};