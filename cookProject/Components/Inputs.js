import React from 'react';
import {TouchableOpacity, TextInput, View, Text} from 'react-native';
import {StylesLogin} from './LoginPage/LoginPageStyle';
export const MyInput = ({name, onChangeText, value, error, touched}) => {
  return (
    <View
    style={{
      height: 70
    }}
    >
    <Text
    style={{
      color: "red"
    }}
    >{error} {touched}</Text>
    <TextInput
      style={StylesLogin.inputField}
      onChangeText={onChangeText}
      value={value}
      name={name}
      id={name}
      placeholder={name}
      />
      
     </View>
  );
};
