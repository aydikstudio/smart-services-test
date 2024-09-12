import './App.scss';
import {
    Button,
    Container,
    Grid2,
    TextField,
    Typography,
    useMediaQuery,
} from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeForm } from './redux/features/form/formSlice';
import { Form } from './shared/ui/form/form';
import { useForm } from './shared/ui/form/useForm';

function App() {
    const { open, handleOpen, handleClose } = useForm();
    const dispatch = useDispatch();

    const matches = useMediaQuery('(max-width:640px)');

    const onChange = e => {
        dispatch(
            changeForm({
                name: e.target.name,
                value: e.target.value,
            }),
        );
    };

    return (
        <div className="App">
            <Container
                width={1280}
                sx={{
                    py: '20px',
                }}
            >
                <Typography sx={{ fontWeight: 'bold' }}>
                    Change your private information
                </Typography>
                <Typography sx={{ marginTop: 1, color: '#9DA9AB' }}>
                    Please read our{' '}
                    <a href="https://www.google.ru/" target="_blank">
                        terms of use
                    </a>{' '}
                    to be informed how we manage your private data.
                </Typography>
                <Grid2 container spacing={2} className="form-block">
                    <Grid2 size={matches ? 12 : 6}>
                        <label className="form-block-label">
                            Enter your first name
                        </label>
                        <TextField
                            id="outlined-basic"
                            name="firstName"
                            fullWidth
                            variant="outlined"
                            placeholder="First name*"
                            onChange={e => onChange(e)}
                        />
                    </Grid2>
                    <Grid2 size={matches ? 12 : 6}>
                        <label className="form-block-label">
                            Enter your email
                        </label>
                        <TextField
                            id="outlined-basic"
                            name="email"
                            fullWidth
                            variant="outlined"
                            placeholder="Email*"
                            onChange={e => onChange(e)}
                        />
                    </Grid2>
                </Grid2>
                <Grid2 container spacing={2} className="form-block">
                    <Grid2 size={12}>
                        <label className="form-block-label">Bio</label>
                        <TextField
                            fullWidth
                            name="bio"
                            placeholder="Bio"
                            onChange={e => onChange(e)}
                        />
                    </Grid2>
                </Grid2>
                <hr
                    style={{
                        marginTop: 25,
                    }}
                />

                <Grid2
                    container
                    spacing={2}
                    sx={{
                        marginTop: 3,
                    }}
                >
                    <Grid2 size={matches ? 12 : 6}>
                        <label className="form-block-label">Country</label>

                        <TextField
                            id="outlined-basic"
                            name="country"
                            fullWidth
                            variant="outlined"
                            placeholder="Country*"
                            onChange={e => onChange(e)}
                        />
                    </Grid2>
                    <Grid2 size={matches ? 12 : 6}>
                        <label className="form-block-label">City</label>
                        <TextField
                            id="outlined-basic"
                            name="city"
                            fullWidth
                            variant="outlined"
                            placeholder="City*"
                            onChange={e => onChange(e)}
                        />
                    </Grid2>
                </Grid2>
                <label
                    style={{
                        float: 'left',
                        marginTop: 15,
                        marginBottom: 10,
                        fontWeight: 'bold',
                    }}
                >
                    Enter your address
                </label>
                <TextField
                    id="outlined-basic"
                    fullWidth
                    variant="outlined"
                    name="address"
                    placeholder="Address*"
                    onChange={e => onChange(e)}
                />

                <Grid2
                    container
                    spacing={2}
                    sx={{
                        marginTop: 5,
                    }}
                >
                    <Grid2
                        size={6}
                        sx={{
                            textAlign: 'left',
                        }}
                    >
                        You may also consider to update your billing
                        information.
                    </Grid2>
                    <Grid2 size={6}>
                        <Button
                            variant="contained"
                            sx={{
                                float: 'right',
                            }}
                            onClick={() => handleOpen()}
                        >
                            Save
                        </Button>
                    </Grid2>
                </Grid2>
            </Container>

            <Form open={open} handleClose={handleClose} />
        </div>
    );
}

export default App;
