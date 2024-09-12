import { Box, Button, Modal, TextField } from '@mui/material';
import { useForm } from './useForm';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const Form = ({ open, handleClose }) => {
    const { setEmail, onSubmit } = useForm();
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <TextField
                    id="outlined-basic"
                    fullWidth
                    variant="outlined"
                    placeholder="Email*"
                    onChange={e => setEmail(e.target.value)}
                />
                <Button
                    variant="outlined"
                    sx={{
                        marginTop: 2,
                        float: 'left',
                    }}
                    onClick={() => handleClose()}
                >
                    Close
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        marginTop: 2,
                        float: 'right',
                    }}
                    onClick={() => onSubmit()}
                >
                    Save
                </Button>
            </Box>
        </Modal>
    );
};
