import { Fragment } from 'react';
import UserAdd from '../../../components/UserAdd';
import UserList from '../../../components/UserList';
import UserCard from '../../../components/UserCard';
import Feedback from '../../../components/Feedback';
import { useAddUserMutation, useGetUsersQuery } from '../store/api';

function List() {
    const { data, isUninitialized, isLoading, isError } = useGetUsersQuery();
    const [addUser] = useAddUserMutation();

    if (isUninitialized) {
        return <Feedback status={'idle'} />;
    }

    if (isLoading) {
        return <Feedback status={'loading'} />;
    }

    if (isError) {
        return <Feedback status={'error'} />;
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
