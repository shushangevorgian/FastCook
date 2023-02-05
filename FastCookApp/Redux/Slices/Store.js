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
import CreateNewRecipeSlice from './CreateNewRecipeSlice';
import filterSearchSlice from './filterSearchSlice';
export const store = configureStore({
    reducer:{
        user: UserSlice,
        forgot: ForgotSlice,
        forgotConfirm: ForgotConfirmSlice,
        createPass: CreateNewPassForLogin,
        avatarStore: AvatarSlice,
        signUp: SignUpSlice,
        time: TimeSlice,
        ingridientCtreate: IngridientCreateSlice,
        getIngrigient: GetIngridientSlice,
        dataTime: TimeSlice,
        data: CategorySlice,
        createNewRecipe: CreateNewRecipeSlice,
        filterSearch: filterSearchSlice
        
        
    }
})