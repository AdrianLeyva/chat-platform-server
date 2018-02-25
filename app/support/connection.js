/**
 * Created by adrianaldairleyvasanchez on 2/24/18.
 */
'use strict';
//Modules
const config = require('../configuration/global-configuration');
var client = require('socket.io-client');
var listeners = require('./listeners');

module.exports = function () {
    //Initialize support client of chat platform
    var socket = client.connect('http://' + config.SERVER.HOST + ':' + config.SERVER.HOST);
    socket.emit('support-join', config.SUPPORT_CLIENT.ID);
    listeners.activate(socket);
};