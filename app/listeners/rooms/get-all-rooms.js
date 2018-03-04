/**
 * Created by adrianaldairleyvasanchez on 3/4/18.
 */
'use strict';
module.exports = function (socket, socketHandler) {
    //Return all active rooms
    socket.on('get-all-rooms', function () {
        return socketHandler.getAllRooms(socket);
    });
};