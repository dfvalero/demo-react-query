import { Campaign } from '../types';
import Box from '@mui/material/Box';
import { Fragment } from 'react';
import ChatTextMessage from './ChatTextMessage';
import ChatMediaMessage from './ChatMediaMessage';

type ChatCampaignProps = {
    campaign: Campaign;
};

const ChatCampaign = ({ campaign }: ChatCampaignProps) => {
    const { project } = campaign;
    const { messages } = campaign.chatData[0];

    return (
        <Box textAlign="center">
            {messages.map((message) => (
                <Fragment key={message.id}>
                    {message.type === 'TEXT' && <ChatTextMessage data={message} />}
                    {message.type === 'MEDIA' && <ChatMediaMessage data={message} />}
                </Fragment>
            ))}
            {project === 'BADOO' && (
                <Box sx={{ mb: 2 }}>We want this component here for this type, for some reason</Box>
            )}
        </Box>
    );
};

export default ChatCampaign;
