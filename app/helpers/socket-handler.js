/**
 * Created by adrianaldairleyvasanchez on 2/25/18.
 */
'use strict';

module.exports = {
    getClients: function (io) {
        return io.sockets.clients();
    },

    getClientsOfRoom: function (io, room, callback) {
        io.sockets.adapter.clients([room], function(err, clients){
           callback(clients);
        });
    },

    getAllRooms: function (socket) {
        return socket.rooms;
    }
};