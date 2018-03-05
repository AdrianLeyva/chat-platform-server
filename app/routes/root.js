/**
 * Created by adrianaldairleyvasanchez on 3/4/18.
 */
'use strict';
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.status(200).end('RUNNING');
    });
};