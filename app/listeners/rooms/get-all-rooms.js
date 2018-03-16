/**
 * Created by adrianaldairleyvasanchez on 3/4/18.
 */
'use strict';

module.exports = function (io, socket, socketHandler, hashMap, roomHashMap) {
    //Return all active rooms
    socket.on('get-all-rooms', function (data) {
        let rooms = roomHashMap.getRoomNames();
        io.to(data.room).emit('get-all-rooms', rooms);
    });
};