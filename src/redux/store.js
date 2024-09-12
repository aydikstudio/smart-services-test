import { configureStore } from '@reduxjs/toolkit';
import formSlice from './features/form/formSlice';

export const store = configureStore({
    reducer: {
        form: formSlice,
    },
});
