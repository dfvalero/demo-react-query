import { Box } from '@mui/material';
import type { MediaMessage as Data } from '../types/chat';
import Video from './Video';

type ChatMediaMessageProps = {
    data: Data;
};

const ChatMediaMessage = ({ data }: ChatMediaMessageProps) => {
    const { url, altText = '', isVideo } = data;

    if (isVideo) {
        return (
            <Box sx={{ mb: 2 }}>
                <Video src={url} title={altText} />
            </Box>
        );
    }

    return (
        <Box sx={{ mb: 2 }}>
            <img src={url} width={100} height={100} alt={altText} />
        </Box>
    );
};

export default ChatMediaMessage;
