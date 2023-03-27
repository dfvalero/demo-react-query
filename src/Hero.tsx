import { Box, Theme, Typography } from '@mui/material';

const heroStyle = (theme: Theme) => ({
    background: theme.palette.common.white,
    color: theme.palette.primary.main,
    textAlign: 'center',
});

const heroContentStyle = {
    margin: '0 auto',
    maxWidth: 600,
    pt: 2,
    pb: 1,
};

function Hero() {
    return (
        <Box sx={heroStyle}>
            <Box sx={heroContentStyle}>
                <Typography component="h1" variant="h2" color="textPrimary" gutterBottom>
                    Playground
                </Typography>
                <Typography variant="h6" color="textSecondary" paragraph>
                    Simple repository for learning purposes
                </Typography>
            </Box>
        </Box>
    );
}

export default Hero;
