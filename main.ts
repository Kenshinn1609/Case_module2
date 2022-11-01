import * as readline from 'readline-sync';
import {Controller} from "./Controller";
import {AdminManager} from "./AdminManager";
import {UserManager} from "./UserManager";
import {User} from "./User";

UserManager.addUser('hoang','123',50000)
UserManager.addUser('kens','123',50000)
UserManager.addUser('shin','123',50000)


AdminManager.init()

let controller = new Controller()
if (readline.keyInYN('Moi ban dang nhap?')) {
    // 'Y' key was pressed.
    const usename = readline.question('Ten dang nhap :');
    const password = readline.question('mat khau :');
    const account = controller.login(usename, password)

    if (account && account.role === 'Admin') {
        controller.showAdminMenu()
    }
    else  if ( account && account.role === 'User'){
        controller.showUserMenu()
    }
    // Do something...

} else {
    // Another key was pressed.
    console.log('Ket thuc');
    // Do something...
}



