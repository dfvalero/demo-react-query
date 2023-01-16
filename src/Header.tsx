import { AppBar, Box, Button, Theme, Toolbar } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { routes } from './routes';

const linkStyle = (theme: Theme) => ({
    color: theme.palette.common.white,
});

function Header() {
    return (
        <AppBar component="nav">
            <Toolbar>
                <Box>
                    {routes.map((route) => (
                        <Button
                            key={route.name}
                            sx={linkStyle}
                            component={RouterLink}
                            to={route.path}
                        >
                            {route.name}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
