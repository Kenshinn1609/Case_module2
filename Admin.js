"use strict";
exports.__esModule = true;
exports.Admin = void 0;
var Admin = /** @class */ (function () {
    function Admin(name, password, Id) {
        this._name = name;
        this._password = password;
        this._Id = Id;
    }
    Admin.prototype.getName = function () {
        return this._name;
    };
    Admin.prototype.setName = function (value) {
        this._name = value;
    };
    Admin.prototype.getPassword = function () {
        return this._password;
    };
    Admin.prototype.setPassword = function (value) {
        this._password = value;
    };
    Admin.prototype.getId = function () {
        return this._Id;
    };
    Admin.prototype.setId = function (value) {
        this._Id = value;
    };
    return Admin;
}());
exports.Admin = Admin;
