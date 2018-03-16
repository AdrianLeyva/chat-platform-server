/**
 * Created by adrianaldairleyvasanchez on 3/4/18.
 */
'use strict';
var each = require('sync-each');

module.exports = function (io, socket, socketHandler, hashMap) {
    //Return online users
    socket.on('get-online-users', function (data) {
        socketHandler.getClientsOfRoom(data.room, function (clients) {
            let nicknames = [];
            each(clients,
                function (item, next) {
                   nicknames.push(hashMap.getUserName(item));
                    next()
                },
                function () {
                    io.to(data.room).emit('get-online-users', nicknames);
                    console.log("total clients in room: %d", clients.length);
                }
            );
        });
    });
};