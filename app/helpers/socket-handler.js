/**
 * Created by adrianaldairleyvasanchez on 2/25/18.
 */
'use strict';

function SocketHandler(io) {
    this.io = io;
}

SocketHandler.prototype.getClients = function () {
    return this.io.sockets.clients();
};

SocketHandler.prototype.getClientsOfRoom = function (room, callback) {
    this.io.sockets.adapter.clients([room], function(err, clients){
        callback(clients);
    });
};

SocketHandler.prototype.getAllRooms = function (socket) {
    return socket.rooms;
};

module.exports = SocketHandler;