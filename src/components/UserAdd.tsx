import { Fragment, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { faker } from '@faker-js/faker';
import TextField from './TextField';
import { PostUserRequest } from '../types';

type UserAddProps = {
    onSubmit: (user: PostUserRequest) => void;
};

const generateUser = () => ({
    username: faker.internet.userName(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: faker.datatype.number({ max: 100 }),
    jobTitle: faker.name.jobTitle(),
    address: { city: faker.address.city() },
});

function UserAdd({ onSubmit }: UserAddProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(generateUser());

    const handleClickOpen = () => {
        setUser(generateUser());
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
    };

    const handleSubmit = () => {
        onSubmit(user);
        setIsOpen(false);
    };

    return (
        <Fragment>
            <Button sx={{ mb: 2 }} variant="contained" onClick={handleClickOpen}>
                Add user
            </Button>
            <Dialog open={isOpen} onClose={handleClose}>
                <DialogTitle>Add user</DialogTitle>
                <DialogContent>
                    <TextField id="username" label="Username" value={user.username} />
                    <TextField id="firstName" label="firstName" value={user.firstName} />
                    <TextField id="lastName" label="lastName" value={user.lastName} />
                    <TextField id="age" label="age" value={`${user.age}`} />
                    <TextField id="jobTitle" label="jobTitle" value={user.jobTitle} />
                    <TextField id="city" label="City" value={user.address.city} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button variant="contained" onClick={handleSubmit}>
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}

export default UserAdd;
