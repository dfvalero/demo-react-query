import { Box } from '@mui/material';

type FeedbackProps = {
    status: 'idle' | 'loading' | 'error';
    idleMessage?: string;

    error?: Error;
};

const Text = {
    idle: 'Authenticate First',
    loading: 'Loading...',
    error: 'Error',
};

function Feedback({ status, error }: FeedbackProps) {
    return (
        <Box textAlign="center" sx={{ my: 2 }}>
            <span>{Text[status]}</span>
            {error && <span>{error.message}</span>}
        </Box>
    );
}

export default Feedback;
