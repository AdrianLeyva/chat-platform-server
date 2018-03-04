/**
 * Created by adrianaldairleyvasanchez on 3/4/18.
 */
'use strict';
const config = require('../../configuration/global-configuration');

module.exports = function (io, socket) {
    socket.on('create-room', function (roomName) {
        socket.broadcast.to(config.SUPPORT_CLIENT.SOCKET_ID).emit('join-to-room', roomName);
    });
};