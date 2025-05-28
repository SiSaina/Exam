export interface Role {
    id: number;
    name: string;
}

export interface Employee {
    id: number;
    name: string;
    email: string;
    role: Role;
}

