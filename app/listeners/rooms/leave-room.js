/**
 * Created by adrianaldairleyvasanchez on 3/4/18.
 */
'use strict';
module.exports = function (io, socket, hashMap) {
    //Leave the current room
    socket.on('leave-room', function (data) {
        io.to(data.room).emit('leave-room', hashMap.getUserName(socket.id));
        socket.leave(data.room, function (err) {
            if(err)
                console.log(err);
            else
                console.log(hashMap.getUserName(socket.id) + ' has leaved ' + data.room + ' room');
        });
    });
};