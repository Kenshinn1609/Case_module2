import {pcs, Status} from "./Pc";
import {Admin} from "./Admin";
import {UserManager} from "./UserManager";


export class AdminManager {
    static _admins: Admin[] = []

    static init() {
        const admin = new Admin('Admin', '123456', 0)
        this._admins = [admin]
    }

    static showListMayTrong() {
        // let listInActive: any[] = []
        // this.pc.forEach(pc => {
        //     listInActive.push(pc.status.Inactive)
        // })
        console.table(pcs.filter(pc => pc.status === Status.Inactive))

    }

    static showListPc() {
        console.table(pcs)
    }


    static getAdmins(): Admin[] {
        return this._admins;

    }

    static setAdmins(value: Admin[]) {
        this._admins = value;
    }

    static searchAdminByName(value: string) {
        return this._admins.find((admin) => admin.getName() === value);
    }

    static searchAdminByID(id: number): Admin | null {
        let admin = this._admins.find((admin) => admin.getId() === id)
        if (admin) {
            console.log(admin);
            return admin;
        } else {
            console.log('No admin found')
            return null
        }

    }

    static getIndexByID(id: number): number {
        let index = this._admins.findIndex((admin, index) => {
            return admin.getId() === id;
        })
        return index;
    }

    static editUserTkById(UserID: number, value: number): void {
        UserManager.getUsers().forEach(user => {
            if (user.getId() === UserID) {
                user.setTk(value)
            }
        })
    }

    static changePasswordById(UserID: number, password: string) {
        let i = this.getIndexByID(UserID);
        if (i > 0) {
            UserManager.getUsers()[i].setPassword(password);
            console.log('doi mk thanh cong')
        }
    }

    static turnOnPc(index: number) {
        pcs[index].status = Status.Active
        console.log('bat may ' + pcs[index].name)
    }


}
