import { Box, Typography } from '@mui/material';
import Title from '../components/Title';
import UserList from '../components/UserList';

function List() {
    return (
        <Box sx={{ p: 3 }} textAlign="center">
            <Typography sx={{ mb: 2 }} component="h2" variant="h4">
                React Query
            </Typography>
            <Title />
            <UserList />
        </Box>
    );
}

export default List;
