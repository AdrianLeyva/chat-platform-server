/**
 * Created by adrianaldairleyvasanchez on 2/22/18.
 */
'use strict';

module.exports = {
    /*
     Socket of support bot for users.
     */
    setupSupportRoom: function (io) {
        var supportRoom = io.of('/support');
        supportRoom.on('connection', function(socket){
            console.log('someone connected');
            socket.on('chat-message', function (message, user) {
                //Some code here
            });
        });
    },

    /*
     Setup all the sockets for created rooms
     */
    setupAllRooms: function (roomsArray) {
        roomsArray.forEach(function(element) {
            element.on('connection', function (socket) {
                socket.on('chat-message', function (message, user) {
                    element.emit('chat-message', message, user);
                });
            });
        });
    },

    /*
        Return all defined chat rooms.
     */
    getAllRooms: function () {
        let roomsArray = ['Televisores', 'Celulares', 'DVD', 'Smartwatch'];
        return roomsArray;
    }
};