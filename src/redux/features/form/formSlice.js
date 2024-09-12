import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import moment from 'moment';
import emailjs from '@emailjs/browser';

const initialState = {
    value: {
        firstName: '',
        email: '',
        bio: '',
        country: '',
        city: '',
        address: '',
        time: '',
    },
};

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        changeForm: (state, action) => {
            state.value[action.payload.name] = action.payload.value;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(submitForm.fulfilled, (state, action) => {
                alert('Форма успешно отправлена');
                window.location.reload();
            })
            .addCase(submitForm.rejected, (state, action) => {
                alert('Форма успешно не отправлена');
            });
    },
});

// state.value[payload.name] = action.payload;
export const { changeForm } = formSlice.actions;

export default formSlice.reducer;

export const submitForm = createAsyncThunk('/', async (arg, { getState }) => {
    const {
        form: { value },
    } = getState();
    const obj = { ...value };

    if (
        obj.firstName.length > 0 &&
        obj.email.length > 0 &&
        obj.country.length > 0 &&
        obj.city.length > 0 &&
        obj.address.length > 0
    ) {
        obj.time = moment().format('DD/MM/YYYY  HH:mm');
        obj.email_to = arg;

        await emailjs
            .send(
                process.env.REACT_APP_SERVICE,
                process.env.REACT_APP_TEMPLATE,
                obj,
                {
                    publicKey: process.env.REACT_APP_KEY,
                },
            )
            .then(
                response => {
                    return response.data;
                },
                err => {
                    console.log(err);
                    return err;
                },
            );
    } else {
        alert('Заполните все поля');
    }
});
