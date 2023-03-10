import { Card, CardContent, CardMedia, Grid, Theme, Typography } from '@mui/material';
import { User } from '../types';

const cardStyle = (theme: Theme) => ({
    maxWidth: 300,
    height: '100%',
    background: theme.palette.grey['100'],
});

const cardMediaStyle = (theme: Theme) => ({
    height: 200,
    background: theme.palette.common.white,
});

const buildDescription = (user: User) => {
    const { firstName, lastName, age, jobTitle, address } = user;
    const firstLine = `${firstName} ${lastName} is ${age} years old, `;
    const secondLine = `works as a ${jobTitle} and lives in ${address.city}.`;

    return `${firstLine} ${secondLine}`;
};

function UserCard({ user }: { user: User }) {
    return (
        <Grid item key={user.id}>
            <Card sx={cardStyle}>
                <CardMedia
                    sx={cardMediaStyle}
                    component="img"
                    image={user.image}
                    title={`${user.username}'s avatar`}
                />
                <CardContent>
                    <Typography gutterBottom component="h5" variant="h5">
                        {user.username}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {buildDescription(user)}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default UserCard;
