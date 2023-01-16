import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Toolbar } from '@mui/material';
import Header from './Header';
import Hero from './Hero';

function Layout() {
    return (
        <Fragment>
            <Header />
            <Box component="main">
                <Toolbar />
                <Hero />
                <Outlet />
            </Box>
        </Fragment>
    );
}

export default Layout;
