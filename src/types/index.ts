type Address = {
    city: string;
};

export type User = {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
    address: Address;
    image: string;
};

export type GetUsersResponse = {
    users: User[];
    total: number;
};
