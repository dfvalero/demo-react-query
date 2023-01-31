import { Box, Typography } from '@mui/material';
import Title from '../components/Title';
import List from '../components/List';

function Home() {
    return (
        <Box sx={{ p: 3 }} textAlign="center">
            <Typography sx={{ mb: 2 }} component="h2" variant="h4">
                To Remove
            </Typography>
            <Title />
            <List />
        </Box>
    );
}

export default Home;
