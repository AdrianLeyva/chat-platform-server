/**
 * Created by adrianaldairleyvasanchez on 3/4/18.
 */
'use strict';
module.exports = function (io, socket, hashMap) {
    //Broadcast a message
    socket.on('chat-message', function (data) {
        data.nickname = hashMap.getUserName(socket.id);
        io.to(data.room).emit('chat-message', data);
        console.log(JSON.stringify(data));
    });
};