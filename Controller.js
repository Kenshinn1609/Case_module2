"use strict";
exports.__esModule = true;
exports.Controller = void 0;
var AdminManager_1 = require("./AdminManager");
var UserManager_1 = require("./UserManager");
var readline = require("readline-sync");
var Controller = /** @class */ (function () {
    function Controller() {
    }
    Controller.prototype.login = function (username, password) {
        var admin = AdminManager_1.AdminManager.searchAdminByName(username);
        if (admin) {
            if (admin.getPassword() === password) {
                return { role: 'Admin', account: admin };
            }
            else {
                console.log('Sai mk');
            }
        }
        else {
            var user = UserManager_1.UserManager.searchUserByName(username);
            if (user) {
                if (user.getPassword() === password) {
                    return { role: 'User', account: user };
                }
                else {
                    console.log('Sai mk');
                }
            }
            else {
                console.log('Sai tk');
            }
        }
    };
    Controller.prototype.showAdminMenu = function () {
        var choice = ['tao tai khoan user', 'nap tien', 'tim tk qua ID', 'show may trong', 'doi mat khau', 'xoa tk', 'Bat may'];
        var index = readline.keyInSelect(choice, 'Moi lua chon');
        switch (index) {
            case 0:
                {
                    var existedUser = null;
                    var username = "";
                    var password = "";
                    var Tk = 0;
                    var done = false;
                    var existedAdmin = null;
                    do {
                        username = readline.question('Ten dang nhap :');
                        existedAdmin = AdminManager_1.AdminManager.searchAdminByName(username);
                        existedUser = UserManager_1.UserManager.searchUserByName(username);
                        if (existedUser || existedAdmin || !/[a-z]/.test(username)) {
                            if (!readline.keyInYN('Moi ban nhap lai.?')) {
                                done = false;
                                break;
                            }
                            else {
                                done = false;
                                continue;
                            }
                        }
                        password = readline.question('mat khau :');
                        Tk = readline.questionInt('so tien trong tk :');
                        done = true;
                    } while (!done);
                    if (!done) {
                        this.showAdminMenu();
                        return;
                    }
                    UserManager_1.UserManager.addUser(username, password, Tk);
                    console.log('Thanh Cong');
                    UserManager_1.UserManager.showLissUser();
                    this.showAdminMenu();
                }
                break;
            case 1:
                {
                    var id = readline.questionInt('Id tk nap tien:');
                    var Tk = readline.questionInt('so tien can nap :');
                    AdminManager_1.AdminManager.editUserTkById(id, Tk);
                    this.showAdminMenu();
                }
                break;
            case 2:
                {
                    var id = readline.questionInt('Id tk can tim :');
                    UserManager_1.UserManager.searchUserByID(id);
                    this.showAdminMenu();
                }
                break;
                case3: {
                    AdminManager_1.AdminManager.showListMayTrong();
                }
                break;
            case 4:
                {
                    var id = readline.questionInt('id tk can doi mk : ');
                    var password = readline.question('mat khau can doi la :');
                    AdminManager_1.AdminManager.changePasswordById(id, password);
                    UserManager_1.UserManager.showLissUser();
                    this.showAdminMenu();
                }
                break;
            case 5:
                {
                    var id = readline.questionInt('id tk can xoa :');
                    UserManager_1.UserManager.deleteUser(id);
                    UserManager_1.UserManager.showLissUser();
                    this.showAdminMenu();
                }
                break;
            case 6: {
                var index_1 = readline.questionInt(' vi tri may can bat :');
                AdminManager_1.AdminManager.turnOnPc(index_1);
                AdminManager_1.AdminManager.showListMayTrong();
                this.showAdminMenu();
            }
        }
    };
    Controller.prototype.showUserMenu = function () {
        var choice1 = ['doi mk', 'xoa tk', 'bat may'];
        var index2 = readline.keyInSelect(choice1, 'Moi lua chon ');
        switch (index2) {
            case 0:
                {
                    var id = readline.questionInt('id tk can doi mk : ');
                    var password = readline.question('mat khau can doi la :');
                    AdminManager_1.AdminManager.changePasswordById(id, password);
                    this.showUserMenu();
                }
                break;
            case 1:
                {
                    var id = readline.questionInt('Id tk can xoa :');
                    var Tk = readline.questionInt('so tien can nap :');
                    AdminManager_1.AdminManager.editUserTkById(id, Tk);
                    this.showUserMenu();
                }
                break;
            case 2: {
                var index = readline.questionInt(' vi tri may can bat :');
                AdminManager_1.AdminManager.turnOnPc(index);
                this.showUserMenu();
            }
        }
    };
    return Controller;
}());
exports.Controller = Controller;
