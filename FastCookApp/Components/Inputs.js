import React from 'react';
import {TouchableOpacity, TextInput, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from './Colors';
import {StylesLogin} from './LoginPage/LoginPageStyle';
export const MyInput = ({style, name, onChangeText, placeholder, value, error, touched, type, icon, color= "gray",secureTextEntry}) => {
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
     secureTextEntry={secureTextEntry}
    placeholderTextColor={color}
    style={style}
      onChangeText={onChangeText}
      value={value}
      name={name}
      id={name}
      placeholder={placeholder}
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
