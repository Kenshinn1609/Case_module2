"use strict";
exports.__esModule = true;
exports.AdminManager = void 0;
var Pc_1 = require("./Pc");
var Admin_1 = require("./Admin");
var UserManager_1 = require("./UserManager");
var AdminManager = /** @class */ (function () {
    function AdminManager() {
    }
    AdminManager.init = function () {
        var admin = new Admin_1.Admin('Admin', '123456', 0);
        this._admins = [admin];
    };
    AdminManager.showListMayTrong = function () {
        // let listInActive: any[] = []
        // this.pc.forEach(pc => {
        //     listInActive.push(pc.status.Inactive)
        // })
        console.table(Pc_1.pcs.filter(function (pc) { return pc.status === Pc_1.Status.Inactive; }));
    };
    AdminManager.showListPc = function () {
        console.table(Pc_1.pcs);
    };
    AdminManager.getAdmins = function () {
        return this._admins;
    };
    AdminManager.setAdmins = function (value) {
        this._admins = value;
    };
    AdminManager.searchAdminByName = function (value) {
        return this._admins.find(function (admin) { return admin.getName() === value; });
    };
    AdminManager.searchAdminByID = function (id) {
        var admin = this._admins.find(function (admin) { return admin.getId() === id; });
        if (admin) {
            console.log(admin);
            return admin;
        }
        else {
            console.log('No admin found');
            return null;
        }
    };
    AdminManager.getIndexByID = function (id) {
        var index = this._admins.findIndex(function (admin, index) {
            return admin.getId() === id;
        });
        return index;
    };
    AdminManager.editUserTkById = function (UserID, value) {
        UserManager_1.UserManager.getUsers().forEach(function (user) {
            if (user.getId() === UserID) {
                user.setTk(value);
            }
        });
    };
    AdminManager.changePasswordById = function (UserID, password) {
        var i = this.getIndexByID(UserID);
        if (i > 0) {
            UserManager_1.UserManager.getUsers()[i].setPassword(password);
            console.log('doi mk thanh cong');
        }
    };
    AdminManager.turnOnPc = function (index) {
        Pc_1.pcs[index].status = Pc_1.Status.Active;
        console.log('bat may ' + Pc_1.pcs[index].name);
    };
    AdminManager._admins = [];
    return AdminManager;
}());
exports.AdminManager = AdminManager;
