/**
 * Created by adrianaldairleyvasanchez on 3/21/18.
 */
'use strict';
var each = require('sync-each');

module.exports = function (app, socketHandler, hashMap) {
    app.get('/get-active-users', function (req, res) {
        var clients = socketHandler.getClients();
        let nicknames = [];
        each(clients,
            function (item, next) {
                nicknames.push(hashMap.getUserName(item));
                next()
            },
            function () {
                res.end(JSON.stringify(nicknames));
            }
        );
    });
};