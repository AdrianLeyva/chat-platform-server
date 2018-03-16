/**
 * Created by adrianaldairleyvasanchez on 3/4/18.
 */
'use strict';
module.exports = function (io, socket, hashMap) {
    //Disconnect user
    socket.on('disconnection', function (data) {
        io.to(data.room).emit('leave-room', hashMap.getUserName(socket.id));
        hashMap.deleteUserName(socket.id);
    });
};