export class Admin {
    private _name: string;
    private _password: string;
    private _Id: number;

    constructor(name: string, password: string, Id: number) {
        this._name = name;
        this._password = password;
        this._Id = Id;
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
        return this._Id;
    }

    setId(value: number) {
        this._Id = value;
    }
}