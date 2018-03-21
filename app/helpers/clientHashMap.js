/**
 * Created by adrianaldairleyvasanchez on 2/22/18.
 */
'use strict';

function ClientHashMap() {
    this.map = [];
}

ClientHashMap.prototype.getUserName = function (socketID) {
    return this.map[socketID];
};

ClientHashMap.prototype.getAllUsers = function () {
    return this.map;
};

ClientHashMap.prototype.addUserName = function (nickName, socketID) {
    this.map[socketID] = nickName;
};

ClientHashMap.prototype.deleteUserName = function (socketID) {
    delete this.map[socketID];
};

module.exports = ClientHashMap;