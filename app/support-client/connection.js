/**
 * Created by adrianaldairleyvasanchez on 2/24/18.
 */
'use strict';
//Modules
const config = require('../configuration/global-configuration');
const PORT = process.env.PORT || config.SERVER.PORT;
var socket = require('socket.io-client')('http://' + config.SERVER.HOST + ':' + PORT);
var listeners = require('./listeners');

module.exports = function () {
    //Initialize support-client client of chat platform
    socket.on('connect', function () {
        listeners.activate(socket);
        socket.emit('support-client-join', config.SUPPORT_CLIENT.ID);
    });

    socket.on('disconnect', function () {
        console.log(config.SUPPORT_CLIENT.NAME + 'has disconnected');
    });
};