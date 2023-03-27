import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { TextMessage as Data } from '../types/chat';

type ChatTextMessageProps = {
    data: Data;
};

const ChatTextMessage = ({ data }: ChatTextMessageProps) => {
    const { text } = data;

    return (
        <Box sx={{ mb: 2 }}>
            <Typography>{text}</Typography>
        </Box>
    );
};

export default ChatTextMessage;
