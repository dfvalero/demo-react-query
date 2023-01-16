import { AppBar, Box, Button, Theme, Toolbar } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const linkStyle = (theme: Theme) => ({
    color: theme.palette.common.white,
});

function Header() {
    return (
        <AppBar component="nav">
            <Toolbar>
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
            </Toolbar>
        </AppBar>
    );
}

export default Header;
