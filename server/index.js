import express from 'express';
import cors from 'cors';
import { faker } from '@faker-js/faker';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const generateUser = () => {
    const gender = Math.random() < 0.5 ? 'male' : 'female';

    return {
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        firstName: faker.name.firstName(gender),
        lastName: faker.name.lastName(gender),
        age: faker.datatype.number({ max: 100 }),
        jobTitle: faker.name.jobTitle(),
        address: { city: faker.address.city() },
        image: faker.image.people(300, 300, true),
    };
};
const generateUsers = (quantity) => {
    return [...Array(quantity)].map(generateUser);
};

const users = generateUsers(15);

app.get('/users', (req, res) => {
    res.send({ users, total: users.length });
});

app.post('/users', (req, res) => {
    const id = faker.datatype.uuid();
    const { username, firstName, lastName, age, jobTitle, address } = req.body;
    const image = faker.image.people(300, 300, true);

    const newUser = { id, username, firstName, lastName, age, jobTitle, address, image };

    users.unshift(newUser);

    res.send({ user: newUser, message: `user ${id} added` });
});

app.listen(3051, () => console.log('Example app listening on port 3051!'));
