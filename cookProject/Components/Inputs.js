import React from 'react';
import {TouchableOpacity, TextInput, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from './Colors';
import {StylesLogin} from './LoginPage/LoginPageStyle';
export const MyInput = ({name, onChangeText, value, error, touched, type, icon, color= "gray",autoComplete}) => {
  return (
    <View
    style={{
    alignContent: "center",
      height: 70
    }}
    >
   
    
    <View
    style={{
      flexDirection: "row",
            margin: 5,
            alignItems: "center",
            backgroundColor: Colors.gray,
            borderBottomColor: Colors.borderColor,
            borderBottomWidth: 2,
            

  }}
    >
      <Text
      stye={{
      fontSize: 18
      
    }}
      >{icon}</Text>
    <TextInput
    // autoComplete={autoComplete}
    placeholderTextColor={color}
    style={StylesLogin.inputField}
      onChangeText={onChangeText}
      value={value}
      name={name}
      id={name}
      placeholder={name}
      type={type}
      
      />
 
      </View>
      <Text
    style={{
      color: "red",
      fontSize: 16
    }}
    >{error} {touched}</Text>
     </View>
  );
};
