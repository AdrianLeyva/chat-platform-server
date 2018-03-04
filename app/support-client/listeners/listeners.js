/**
 * Created by adrianaldairleyvasanchez on 2/24/18.
 */
'use strict';
const config = require('../../configuration/global-configuration');
var ClientHashMap = require('../../helpers/clientHashMap');
var hashMap = new ClientHashMap();

module.exports = {
    activate: function (socket) {
        socket.on('success-validation', function (token) {
            console.log(config.SUPPORT_CLIENT.NAME + ' is connected');
            hashMap.addUserName(token, socket.id);
            config.SUPPORT_CLIENT.SOCKET_ID = socket.id;
            socket.on('question', function (client, message) {

            })
        });

        socket.on('join-to-room', function (roomName) {
            console.log(config.SUPPORT_CLIENT.NAME + ' has joined to ' + roomName + ' room');
            socket.emit('join-to-room', roomName);
        })
    }
};