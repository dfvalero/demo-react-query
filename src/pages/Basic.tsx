import { Box, Grid, Typography } from '@mui/material';
import { useBasic } from '../hooks/useBasic';
import UserCard from '../components/UserCard';

function Basic() {
    const { users: list, total } = useBasic();

    return (
        <Box sx={{ p: 3 }}>
            <Box textAlign="center" sx={{ mb: 2 }}>
                <Typography component="h5" variant="h5">
                    Total Users: {total}
                </Typography>
            </Box>
            <Grid container spacing={3} justifyContent="center" alignItems="stretch">
                {list.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </Grid>
        </Box>
    );
}

export default Basic;
