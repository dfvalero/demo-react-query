import { Box } from '@mui/material';
import Title from '../components/Title';
import UserList from '../components/UserList';
import { BasicUserProvider } from '../context';

function List() {
    return (
        <BasicUserProvider>
            <Box sx={{ p: 3 }}>
                <Title />
                <UserList />
            </Box>
        </BasicUserProvider>
    );
}

export default List;
