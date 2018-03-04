/**
 * Created by adrianaldairleyvasanchez on 3/4/18.
 */
'use strict';

module.exports = function (io, socket, socketHandler) {
    //Return online users
    socket.on('get-online-users', function (data) {
        socketHandler.getClientsOfRoom(data.room, function (clients) {
            io.to(data.room).emit('get-online-users', clients);
            console.log("total clients in room: %d", clients.length);
        });
    });
};