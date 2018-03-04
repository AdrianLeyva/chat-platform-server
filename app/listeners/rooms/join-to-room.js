/**
 * Created by adrianaldairleyvasanchez on 3/4/18.
 */
'use strict';
module.exports = function (socket) {
    //REQUEST TO JOIN NEW CREATED ROOM --SUPPORT--
    socket.on('join-to-room', function (roomName) {
        socket.join(roomName);
    });
};