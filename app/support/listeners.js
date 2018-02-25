/**
 * Created by adrianaldairleyvasanchez on 2/24/18.
 */
'use strict';
module.exports = {
    activate: function (socket) {
        socket.on('success-validation', function () {
            console.log('SUPPORT is connected');
            socket.on('question', function (client, message) {

            })
        });
    }
};