import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import MUIList from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import { useGetCampaigns } from '../hooks/useGetCampaign';

function List() {
    const campaigns = useGetCampaigns();

    return (
        <Box sx={{ p: 3 }} textAlign="center">
            <Typography sx={{ mb: 2 }} component="h2" variant="h4">
                Complexity
            </Typography>
            <MUIList>
                {campaigns.map((campaign) => (
                    <ListItem key={campaign.id} disablePadding>
                        <ListItemButton component={Link} to={`/complexity/${campaign.id}`}>
                            <ListItemText primary={campaign.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </MUIList>
        </Box>
    );
}

export default List;
