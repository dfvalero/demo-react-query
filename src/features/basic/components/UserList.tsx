import { useBasic } from '../hooks/useBasic';
import Feedback from '../../../components/Feedback';
import UserList from '../../../components/UserList';
import UserCard from '../../../components/UserCard';
import { Button } from '@mui/material';
import { Fragment } from 'react';

function Title() {
    const { data, status, error, add } = useBasic();

    if (status !== 'success') {
        return <Feedback status={status} error={error} />;
    }

    const user = {
        username: 'tanyo',
        firstName: 'David',
        lastName: 'Fernandez',
        age: 37,
        jobTitle: 'Frontend Developer',
        address: { city: 'Barcelona ' },
    };

    return (
        <Fragment>
            <Button sx={{ mb: 2 }} variant="contained" onClick={() => add(user)}>
                Add user
            </Button>
            <UserList>
                {data.users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </UserList>
        </Fragment>
    );
}

export default Title;
