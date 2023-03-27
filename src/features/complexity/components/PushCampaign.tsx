import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Campaign } from '../types';

type PushCampaignProps = {
    campaign: Campaign;
};

const PushCampaign = ({ campaign }: PushCampaignProps) => {
    const { title, message, link } = campaign.pushData[0];

    return (
        <Box textAlign="center">
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 2 }}>
                <Typography component="span" fontWeight={500}>
                    Title:
                </Typography>
                <Typography component="span">{title}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 2 }}>
                <Typography component="span" fontWeight={500}>
                    Message:
                </Typography>
                <Typography component="span">{message}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 2 }}>
                <Typography component="span" fontWeight={500}>
                    URL:
                </Typography>
                <Link href={link}>{link}</Link>
            </Box>
        </Box>
    );
};

export default PushCampaign;
