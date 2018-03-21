/**
 * Created by adrianaldairleyvasanchez on 3/4/18.
 */
'use strict';
const booter = require('../../helpers/booter');
const SocketHandler = require('../../helpers/socket-handler');

module.exports = function (io, hashMap, roomHashMap, app) {
    /*
     Client and Server sockets are connected.
     Initialize all event listeners.
     */
    io.on('connection', function(socket) {
        console.log('user connected');
        let socketHandler = new SocketHandler(io);

        /*var app = require('express')();
        app.listen(8121, function () {
            app.get('/', function (req, res) {
                res.status(200).end('RUNNING');
            });
            app.get('/get-active-users', function (req, res) {
                socketHandler.getClients(hashMap, function (clients) {
                    console.log(clients);
                    res.end(clients);
                });
            });
        });*/
        booter(io, socket, hashMap, roomHashMap, socketHandler, app);
    });
};