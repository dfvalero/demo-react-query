import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useGetCampaign } from '../hooks/useGetCampaign';
import { invariant } from '../../../utils';
import Video from '../components/Video';

function Page() {
    const { campaignId } = useParams<{ campaignId: string }>();

    invariant(campaignId);

    const campaign = useGetCampaign(campaignId);

    if (campaign === undefined) {
        return <div>Campaign Not Found</div>;
    }

    return (
        <Box sx={{ p: 3 }} textAlign="center">
            <Typography sx={{ mb: 2 }} component="h2" variant="h4">
                Item {campaign.id}
            </Typography>
            <Video src="https://www.youtube.com/embed/-xbeQ5ziyXM" title="YouTube video player" />
        </Box>
    );
}

export default Page;
