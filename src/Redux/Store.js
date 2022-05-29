import {configureStore} from '@reduxjs/toolkit';
import UserReducer from './Features/Users';

export default configureStore({
    reducer: UserReducer,
})