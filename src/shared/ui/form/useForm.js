import React from 'react';
import { useDispatch } from 'react-redux';
import { submitForm } from '../../../redux/features/form/formSlice';

export const useForm = () => {
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();

    const onSubmit = () => {
        if (email.length > 0) {
            dispatch(submitForm(email));
        } else {
            alert('Введите Email');
        }
    };

    return {
        setOpen,
        setEmail,
        handleOpen,
        handleClose,
        email,
        open,
        onSubmit,
    };
};
