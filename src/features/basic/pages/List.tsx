import { Box } from '@mui/material';
import Title from '../components/Title';
import UserList from '../components/UserList';

function List() {
    return (
        <Box sx={{ p: 3 }}>
            <Title />
            <UserList />
        </Box>
    );
}

export default List;
