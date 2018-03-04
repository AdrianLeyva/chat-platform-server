/**
 * Created by adrianaldairleyvasanchez on 3/4/18.
 */
'use strict';
module.exports = function (socket, hashMap) {
    //Disconnect user
    socket.on('disconnection', function () {
        hashMap.deleteUserName(socket.id);
    });
};