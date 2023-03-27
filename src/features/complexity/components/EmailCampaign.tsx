import { Fragment } from 'react';
import Box from '@mui/material/Box';
import { Campaign } from '../types';
import EmailTextBlock from './EmailTextBlock';
import EmailImageBlock from './EmailImageBlock';

type EmailCampaignProps = {
    campaign: Campaign;
};

const EmailCampaign = ({ campaign }: EmailCampaignProps) => {
    const { project } = campaign;
    const { blocks } = campaign.emailData[0];

    return (
        <Box textAlign="center">
            {project === 'BUMBLE' && (
                <Box sx={{ mb: 2 }}>We want this component here for this type, for some reason</Box>
            )}
            {blocks.map((block) => (
                <Fragment key={block.id}>
                    {block.type === 'TEXT' && <EmailTextBlock data={block} />}
                    {block.type === 'IMAGE' && <EmailImageBlock data={block} />}
                </Fragment>
            ))}
        </Box>
    );
};

export default EmailCampaign;
