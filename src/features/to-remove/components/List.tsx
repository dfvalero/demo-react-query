import { List as BaseList, ListItem, ListItemText } from '@mui/material';

function Home() {
    return (
        <BaseList dense={true}>
            <ListItem>
                <ListItemText primary="First item" />
                <ListItemText primary="Second item" />
                <ListItemText primary="Third item" />
                <ListItemText primary="..." />
                <ListItemText primary="n-th item" />
            </ListItem>
        </BaseList>
    );
}

export default Home;
