import { useBasic } from '../hooks/useBasic';
import Feedback from '../../../components/Feedback';
import UserList from '../../../components/UserList';
import UserCard from '../../../components/UserCard';

function Title() {
    const { data, status, error } = useBasic();

    if (status !== 'success') {
        return <Feedback status={status} error={error} />;
    }

    return (
        <UserList>
            {data.users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </UserList>
    );
}

export default Title;
