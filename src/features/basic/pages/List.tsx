import { Box } from '@mui/material';
import Title from '../components/Title';
import UserList from '../components/UserList';
import { BasicProvider } from '../context';

function List() {
    return (
        <BasicProvider>
            <Box sx={{ p: 3 }}>
                <Title />
                <UserList />
            </Box>
        </BasicProvider>
    );
}

export default List;
