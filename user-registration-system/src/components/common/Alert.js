import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const ActionAlerts = ({
    contain
}) => {
    const [open, setOpen] = React.useState(true);

    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            {open && (
                <Alert severity="error" onClose={() => setOpen(false)}>
                    {contain}
                </Alert>
            )}
        </Stack>
    );
}

export default ActionAlerts
