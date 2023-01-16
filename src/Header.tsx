import { AppBar, Box, Button, Theme, Toolbar } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useBasicAuth } from './features/basic/context/auth';

const linkStyle = (theme: Theme) => ({
    color: theme.palette.common.white,
});

function Header() {
    const { isAuthenticated, login, logout } = useBasicAuth();

    return (
        <AppBar component="nav">
            <Toolbar>
                <Box display="flex" justifyContent="space-between" width="100%">
                    <Box>
                        <Button sx={linkStyle} component={RouterLink} to="/">
                            Basic
                        </Button>
                        <Button sx={linkStyle} component={RouterLink} to="/redux">
                            Redux
                        </Button>
                        <Button sx={linkStyle} component={RouterLink} to="/redux-advanced">
                            Redux Advanced
                        </Button>
                        <Button sx={linkStyle} component={RouterLink} to="/react-query">
                            React Query
                        </Button>
                    </Box>
                    <Box>
                        {!isAuthenticated && <Button sx={linkStyle} onClick={login}>Login</Button>}
                        {isAuthenticated && <Button sx={linkStyle} onClick={logout}>Logout</Button>}
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
