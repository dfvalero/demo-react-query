import { Fragment } from 'react';
import UserAdd from '../../../components/UserAdd';
import UserList from '../../../components/UserList';
import UserCard from '../../../components/UserCard';
import Feedback from '../../../components/Feedback';
import { useGetUsers } from '../hooks/useGetUsers';
import { useAddUser } from '../hooks/useAddUser';

function List() {
    const { data, status } = useGetUsers();
    const { mutate } = useAddUser();

    if (status !== 'success') {
        return <Feedback status={status} />;
    }

    return (
        <Fragment>
            <UserAdd onSubmit={mutate} />
            <UserList>
                {data?.users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </UserList>
        </Fragment>
    );
}

export default List;
