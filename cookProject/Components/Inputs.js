import React from 'react';
import { TouchableOpacity, TextInput, View } from 'react-native';
import { StylesLogin } from './LoginPage/LoginPageStyle';
export const MyInput = ({name, onChangeText, value }) =>{
    return (
    
         <TextInput
            style={StylesLogin.inputField}
            onChangeText={onChangeText}
            value={value}
            placeholder={name}
         />

    )
}

