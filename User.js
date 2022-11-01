"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, password, Id, Tk) {
        this._name = name;
        this._password = password;
        this._Id = Id;
        this.Tk = Tk;
    }
    User.prototype.getTK = function () {
        return this.Tk;
    };
    User.prototype.setTk = function (value) {
        this.Tk = value;
    };
    User.prototype.getName = function () {
        return this._name;
    };
    User.prototype.setName = function (value) {
        this._name = value;
    };
    User.prototype.getPassword = function () {
        return this._password;
    };
    User.prototype.setPassword = function (value) {
        this._password = value;
    };
    User.prototype.getId = function () {
        return this._Id || 0;
    };
    User.prototype.setId = function (value) {
        this._Id = value;
    };
    return User;
}());
exports.User = User;
