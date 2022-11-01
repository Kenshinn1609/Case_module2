import {AdminManager} from "./AdminManager";
import {UserManager} from "./UserManager";
import * as readline from 'readline-sync';
import {User} from "./User";

export class Controller {
    login(username: string, password: string) {
        let admin = AdminManager.searchAdminByName(username)
        if (admin) {
            if (admin.getPassword() === password) {
                return {role: 'Admin', account: admin}
            } else {
                console.log('Sai mk')
            }
        } else {
            let user = UserManager.searchUserByName(username);
            if (user) {
                if (user.getPassword() === password) {
                    return {role: 'User', account: user}
                } else {
                    console.log('Sai mk')
                }
            } else {
                console.log('Sai tk')
            }
        }


    }

    showAdminMenu() {
        const choice = ['tao tai khoan user', 'nap tien', 'tim tk qua ID', 'show may trong', 'doi mat khau', 'xoa tk', 'Bat may']
        const index = readline.keyInSelect(choice, 'Moi lua chon');
        switch (index) {
            case 0 : {
                let existedUser: any = null
                let username = ""
                let password = ""
                let Tk = 0
                let done = false
                let existedAdmin: any = null
                do {
                    username = readline.question('Ten dang nhap :');
                    existedAdmin = AdminManager.searchAdminByName(username)
                    existedUser = UserManager.searchUserByName(username)
                    if (existedUser || existedAdmin || !/[a-z]/.test(username)
                    ) {
                        if (!readline.keyInYN('Moi ban nhap lai.?')) {
                            done = false
                            break
                        } else {
                            done = false
                            continue
                        }
                    }
                    password = readline.question('mat khau :');
                    Tk = readline.questionInt('so tien trong tk :');
                    done = true
                } while (!done)
                if (!done) {
                    this.showAdminMenu()
                    return
                }
                UserManager.addUser(username, password, Tk);
                console.log('Thanh Cong')
                UserManager.showLissUser()
                this.showAdminMenu()
            }
                break;
            case 1 : {
                let id = readline.questionInt('Id tk nap tien:')
                let Tk = readline.questionInt('so tien can nap :')
                AdminManager.editUserTkById(id, Tk)
                this.showAdminMenu()
            }
                break;
            case 2 : {
                let id = readline.questionInt('Id tk can tim :')
                UserManager.searchUserByID(id)
                this.showAdminMenu()
            }
                break;
            case 3 :{
                AdminManager.showListMayTrong()
            }
            break;
            case 4 : {
                let id = readline.questionInt('id tk can doi mk : ')
                let password = readline.question('mat khau can doi la :')
                AdminManager.changePasswordById(id, password)
                UserManager.showLissUser()
                this.showAdminMenu()

            }
                break;
            case 5 : {
                let id = readline.questionInt('id tk can xoa :')
                UserManager.deleteUser(id)
                UserManager.showLissUser()
                this.showAdminMenu()
            }
                break;
            case 6 : {
                let index = readline.questionInt(' vi tri may can bat :')
                AdminManager.turnOnPc(index)
                AdminManager.showListMayTrong()
                this.showAdminMenu()

            }

        }


    }

    showUserMenu() {
        const choice1 = ['doi mk', 'xoa tk', 'bat may']
        const index2 = readline.keyInSelect(choice1, 'Moi lua chon ')
        switch (index2) {
            case 0 : {

                let id = readline.questionInt('id tk can doi mk : ')
                let password = readline.question('mat khau can doi la :')
                AdminManager.changePasswordById(id, password)
                this.showUserMenu()
            }
                break;
            case 1 : {

                let id = readline.questionInt('Id tk can xoa :')
                let Tk = readline.questionInt('so tien can nap :')
                AdminManager.editUserTkById(id, Tk)
                this.showUserMenu()
            }
                break;
            case 2 : {
                let index = readline.questionInt(' vi tri may can bat :')
                AdminManager.turnOnPc(index)
                this.showUserMenu()
            }


        }


    }
}