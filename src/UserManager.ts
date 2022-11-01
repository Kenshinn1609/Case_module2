import {User} from "./User";

export class UserManager {
    static maxId = 1;
    static users: User[] = [];


    static addUser(username: string, password: string
        , Tk: number) {
        const newUser = new User(username, password, this.maxId, Tk
        )
        this.users.push(newUser)
        this.maxId++
    }

    static getUsers() {
        return this.users
    }

    static deleteUser(id: number) {
        this.users = this.getUsers().filter(user => user.getId() !== id)
        console.log('da xoa user')
        return this.users
    }

    static searchUserByName(value: string) {
        return UserManager.users.find((user) => {
            return user.getName() === value
        });
    }

    static searchUserByID(id: number): User | null {
        let user = this.users.find((user) => user.getId() === id)
        if (user) {
            console.log(user);
            return user;
        } else {
            console.log('No user found')
            return null
        }

    }

    static getIndexByID(id: number): number {
        let index = this.users.findIndex((user, index) => {
            return user.getId() === id;
        })
        return index;
    }

    static editTkById(UserID: number, value: number): void {
        this.users.forEach(user => {
            if (user.getId() === UserID) {
                user.setTk(value)
                console.log('nap tien thanh cong')
            }
        })
    }

    static changePasswordById(UserID: number, password: string) {
        let i = this.getIndexByID(UserID);
        if (i > 0) {
            this.users[i].setPassword(password);
            console.log('doi mk thanh cong')
        }
    }
    static showLissUser(){
        console.table(this.users)
    }
}