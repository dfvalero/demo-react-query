import { Box, Theme, Typography } from '@mui/material';

const heroStyle = (theme: Theme) => ({
    background: theme.palette.common.white,
    color: theme.palette.primary.main,
    textAlign: 'center',
});

const heroContentStyle = {
    margin: '0 auto',
    maxWidth: 600,
    p: 1,
};

function Hero() {
    return (
        <Box sx={heroStyle}>
            <Box sx={heroContentStyle}>
                <Typography component="h1" variant="h2" color="textPrimary" gutterBottom>
                    React Query Demo
                </Typography>
                <Typography variant="h6" color="textSecondary" paragraph>
                    React Query as a State Manager
                </Typography>
            </Box>
        </Box>
    );
}

export default Hero;
