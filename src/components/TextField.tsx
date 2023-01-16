import { TextField as BaseTextField } from '@mui/material';

function TextField({ id, label, value }: { id: string; label: string; value: string }) {
    return (
        <BaseTextField
            sx={{ mb: 2 }}
            margin="dense"
            id={id}
            label={label}
            type="text"
            fullWidth
            variant="standard"
            value={value}
        />
    );
}

export default TextField;
