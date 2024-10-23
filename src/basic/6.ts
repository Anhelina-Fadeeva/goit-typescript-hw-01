interface Address {
    city: string;
    country: string;
}

type UserProfile = {
    name: string;
    age: number;
    email: string;
    address?: Address;
};

const mango: UserProfile = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
        city: 'New York',
        country: 'USA' 
    }
};

const poly: UserProfile = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com'
};
