import {User} from "./User";

export enum Status {
    Active = 1,
    Inactive = 0,
}

export interface Pc {
    name: string;
    status: Status;
}

export const pcs: Pc[] = [
    {
        name: 'pc1',
        status: Status.Inactive
    },
    {
        name: 'pc2',
        status: Status.Inactive
    },
    {
        name: 'pc3',
        status: Status.Inactive
    }, {
        name: 'pc4',
        status: Status.Inactive
    }

]