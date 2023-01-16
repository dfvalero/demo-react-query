import { Fragment } from 'react';
import Feedback from '../../../components/Feedback';
import UserList from '../../../components/UserList';
import UserCard from '../../../components/UserCard';
import UserAdd from '../../../components/UserAdd';
import { useBasicUsers } from '../context';

function List() {
    const { data, status, error, addUser } = useBasicUsers();

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
