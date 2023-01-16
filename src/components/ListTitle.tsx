import { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

function ListTitle({ children }: { children: ReactNode }) {
    return (
        <Box textAlign="center" sx={{ mb: 2 }}>
            <Typography component="h5" variant="h5">
                {children}
            </Typography>
        </Box>
    );
}

export default ListTitle;
