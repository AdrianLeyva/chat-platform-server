/**
 * Created by adrianaldairleyvasanchez on 3/4/18.
 */
'use strict';
module.exports = function (io, socket, hashMap) {
    //Join in a chosen room
    socket.on('join-room', function (data) {
        socket.join(data.room);
        hashMap.addUserName(data.nickname, socket.id);
        io.to(data.room).emit('join-room', hashMap.getUserName(socket.id));
        console.log(hashMap.getUserName(socket.id) + ' has joined into ' + data.room + ' room');
    });
};