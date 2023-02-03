import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './UserSlice';
import ForgotConfirmSlice from './ForgotConfirmSlice';
import ForgotSlice from './ForgotSlice';
import  CreateNewPassForLogin  from './CreateNewPassSlice';
import AvatarSlice from './AvatarSlice';
import SignUpSlice from './SignUpSlice';
import TimeSlice from './TimeSlice';
import CategorySlice from './CategorySlice';
import IngridientCreateSlice from './IngridientSlice';
import GetIngridientSlice from './GetIngridientSlice';
export const store = configureStore({
    reducer:{
        user: UserSlice,
        forgot: ForgotSlice,
        forgotConfirm: ForgotConfirmSlice,
        createPass: CreateNewPassForLogin,
        avatarStore: AvatarSlice,
        signUp: SignUpSlice,
        time: TimeSlice,
        category: CategorySlice,
        ingridientCtreate: IngridientCreateSlice,
        getIngrigient: GetIngridientSlice,
        
    }
})