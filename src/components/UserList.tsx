import { ReactNode } from 'react';
import { Grid } from '@mui/material';

function UserList({ children }: { children: ReactNode }) {
    return (
        <Grid container spacing={3} justifyContent="center" alignItems="stretch">
            {children}
        </Grid>
    );
}

export default UserList;
