import { Fragment } from 'react';
import Feedback from '../../../components/Feedback';
import UserList from '../../../components/UserList';
import UserCard from '../../../components/UserCard';
import { useBasic } from '../hooks/useBasic';
import UserAdd from '../../../components/UserAdd';

function List() {
    const { data, status, error, addUser } = useBasic();

    if (status !== 'success') {
        return <Feedback status={status} error={error} />;
    }

    return (
        <Fragment>
            <UserAdd onSubmit={addUser} />
            <UserList>
                {data.users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </UserList>
        </Fragment>
    );
}

export default List;
