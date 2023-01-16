import { useBasic } from '../hooks/useBasic';
import Feedback from '../../../components/Feedback';
import UserList from '../../../components/UserList';
import UserCard from '../../../components/UserCard';
import { Button } from '@mui/material';
import { Fragment } from 'react';

function Title() {
    const { data, status, error, post } = useBasic();

    if (status !== 'success') {
        return <Feedback status={status} error={error} />;
    }

    return (
        <Fragment>
            <Button onClick={post}>Load</Button>
            <UserList>
                {data.users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </UserList>
        </Fragment>

    );
}

export default Title;
