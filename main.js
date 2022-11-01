"use strict";
exports.__esModule = true;
var readline = require("readline-sync");
var Controller_1 = require("./Controller");
var AdminManager_1 = require("./AdminManager");
var UserManager_1 = require("./UserManager");
UserManager_1.UserManager.addUser('hoang', '123', 50000);
UserManager_1.UserManager.addUser('kens', '123', 50000);
UserManager_1.UserManager.addUser('shin', '123', 50000);
AdminManager_1.AdminManager.init();
var controller = new Controller_1.Controller();
if (readline.keyInYN('Moi ban dang nhap?')) {
    // 'Y' key was pressed.
    var usename = readline.question('Ten dang nhap :');
    var password = readline.question('mat khau :');
    var account = controller.login(usename, password);
    if (account && account.role === 'Admin') {
        controller.showAdminMenu();
    }
    else if (account && account.role === 'User') {
        controller.showUserMenu();
    }
    // Do something...
}
else {
    // Another key was pressed.
    console.log('Ket thuc');
    // Do something...
}
