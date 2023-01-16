import { Box } from '@mui/material';

type FeedbackProps = {
    status: 'idle' | 'loading' | 'error';
};

const Text = {
    idle: 'Authenticate First',
    loading: 'Loading...',
    error: 'Error',
};

function Feedback({ status }: FeedbackProps) {
    return (
        <Box textAlign="center" sx={{ my: 2 }}>
            {Text[status]}
        </Box>
    );
}

export default Feedback;
