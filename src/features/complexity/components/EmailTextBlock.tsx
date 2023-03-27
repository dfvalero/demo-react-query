import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { EmailTextBlock as Data } from '../types/email';

type EmailTextBlockProps = {
    data: Data;
};

const EmailTextBlock = ({ data }: EmailTextBlockProps) => {
    const { title, text } = data;

    return (
        <Box>
            {title && (
                <Box sx={{ mb: 2 }}>
                    <Typography fontWeight={500}>{title}</Typography>
                </Box>
            )}
            <Box sx={{ mb: 2 }}>
                <Typography>{text}</Typography>
            </Box>
        </Box>
    );
};

export default EmailTextBlock;
