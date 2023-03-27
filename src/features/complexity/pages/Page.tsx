import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useGetCampaign } from '../hooks/useGetCampaign';
import { invariant } from '../../../utils';
import PushCampaign from '../components/PushCampaign';
import EmailCampaign from '../components/EmailCampaign';
import ChatCampaign from '../components/ChatCampaign';

function Page() {
    const { campaignId } = useParams<{ campaignId: string }>();

    invariant(campaignId);

    const campaign = useGetCampaign(campaignId);

    if (campaign === undefined) {
        return <div>Campaign Not Found</div>;
    }

    return (
        <Box sx={{ p: 3 }} textAlign="center">
            {campaign.project === 'BUMBLE' && (
                <Box sx={{ mb: 2 }}>We want this component here for this type, for some reason</Box>
            )}
            <Typography sx={{ mb: 2 }} component="h2" variant="h4">
                {campaign.name}
            </Typography>
            {campaign.campaignType === 'CHAT' && (
                <Box sx={{ mb: 2 }}>We want this component here for this type, for some reason</Box>
            )}
            {campaign.campaignType === 'PUSH' && <PushCampaign campaign={campaign} />}
            {campaign.campaignType === 'EMAIL' && <EmailCampaign campaign={campaign} />}
            {campaign.campaignType === 'CHAT' && <ChatCampaign campaign={campaign} />}
            {campaign.campaignType === 'PUSH' && (
                <Box sx={{ mb: 2 }}>We want this component here for this type, for some reason</Box>
            )}
        </Box>
    );
}

export default Page;
