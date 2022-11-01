"use strict";
exports.__esModule = true;
exports.UserManager = void 0;
var User_1 = require("./User");
var UserManager = /** @class */ (function () {
    function UserManager() {
    }
    UserManager.addUser = function (username, password, Tk) {
        var newUser = new User_1.User(username, password, this.maxId, Tk);
        this.users.push(newUser);
        this.maxId++;
    };
    UserManager.getUsers = function () {
        return this.users;
    };
    UserManager.deleteUser = function (id) {
        this.users = this.getUsers().filter(function (user) { return user.getId() !== id; });
        console.log('da xoa user');
        return this.users;
    };
    UserManager.searchUserByName = function (value) {
        return UserManager.users.find(function (user) {
            return user.getName() === value;
        });
    };
    UserManager.searchUserByID = function (id) {
        var user = this.users.find(function (user) { return user.getId() === id; });
        if (user) {
            console.log(user);
            return user;
        }
        else {
            console.log('No user found');
            return null;
        }
    };
    UserManager.getIndexByID = function (id) {
        var index = this.users.findIndex(function (user, index) {
            return user.getId() === id;
        });
        return index;
    };
    UserManager.editTkById = function (UserID, value) {
        this.users.forEach(function (user) {
            if (user.getId() === UserID) {
                user.setTk(value);
                console.log('nap tien thanh cong');
            }
        });
    };
    UserManager.changePasswordById = function (UserID, password) {
        var i = this.getIndexByID(UserID);
        if (i > 0) {
            this.users[i].setPassword(password);
            console.log('doi mk thanh cong');
        }
    };
    UserManager.showLissUser = function () {
        console.table(this.users);
    };
    UserManager.maxId = 1;
    UserManager.users = [];
    return UserManager;
}());
exports.UserManager = UserManager;
