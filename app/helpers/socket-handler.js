/**
 * Created by adrianaldairleyvasanchez on 2/25/18.
 */
'use strict';

function SocketHandler(io) {
    this.io = io;
}

SocketHandler.prototype.getClients = function (hashMap, callback) {
    var each = require('sync-each');
    let sockets = this.io.sockets.sockets;
    let clients = [];
    var counter = 0;



    for(let socketID in sockets){
        if(counter == sockets.length)
            callback(clients);

        console.log("SOCKETID: " + socketID);
        clients.push(hashMap.getUserName(socketID));
        counter++;
        if(counter == sockets.length)
            callback(clients);
        console.log(JSON.stringify(clients));
    }
};

SocketHandler.prototype.getClientsOfRoom = function (room, callback) {
    this.io.sockets.adapter.clients([room], function(err, clients){
        console.log(clients);
        callback(clients);
    });
};

SocketHandler.prototype.getAllRooms = function (socket) {
    return socket.rooms;
};

module.exports = SocketHandler;