import { Box } from '@mui/material';
import { useBasic } from '../hooks/useBasic';
import ListTitle from '../../../components/ListTitle';
import UserList from '../../../components/UserList';
import UserCard from '../../../components/UserCard';

function List() {
    const { users: list, total } = useBasic();

    return (
        <Box sx={{ p: 3 }}>
            <ListTitle>Total Users: {total}</ListTitle>
            <UserList>
                {list.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </UserList>
        </Box>
    );
}

export default List;
