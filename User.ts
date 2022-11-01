import {Admin} from "./Admin";

export class User {
    private _name: string;
    private _password: string;
    private _Id?: number;
    private Tk: number;


    constructor(name: string, password: string, Id: number, Tk: number) {
        this._name = name;
        this._password = password;
        this._Id = Id;
        this.Tk = Tk;
    }

    getTK(): number {
        return this.Tk;
    }

    setTk(value: number) {
        this.Tk = value;

    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    getPassword(): string {
        return this._password;
    }

    setPassword(value: string) {
        this._password = value;
    }

    getId(): number {
        return this._Id || 0;
    }

    setId(value: number) {
        this._Id = value;
    }

}