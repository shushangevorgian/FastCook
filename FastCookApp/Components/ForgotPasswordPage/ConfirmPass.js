import React, { useState } from  "react";
import { View, TextInput, TouchableOpacity, Text, Image} from "react-native";
import { ConfirmStyles } from "./ConfirmPasswordStyles";
import { useNavigation } from "@react-navigation/native";
import { StylesLogin } from "../LoginPage/LoginPageStyle";
import { DataConfirm } from "./DataForConfirmPass";
import { MyInput } from "../Inputs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import { ConfirmForgotCode } from "../../Redux/Slices/UserAstyncThunks";
const ConfirmPasswordSchema = Yup.object().shape({
  token: Yup.number()
    .min(4)
    .required('Required valid email'),
    
  });
const ConfirmPass = () => {
  const [tokenn, setToken] = useState('')
   const navigation = useNavigation()
    const dispatch = useDispatch()
    const ConfirmError = useSelector(state => state.forgotConfirm)
    useEffect(() => {
        console.log("success");
        if(ConfirmError.successConfirm === true){
            navigation.navigate("createNewPass",{
              token: tokenn
            })
        }
      
      },[ConfirmError.successConfirm])
      
    return(
        <View
        style={ConfirmStyles.container}
        >
            <View
            style={ConfirmStyles.imageView}
             >
            <Image
            style={{
                alignSelf: "center",
                
            }}
            source={require('../Images/LogoOrange.png')}
            />
            </View>

            <Text
        style={ConfirmStyles.titleText}
        >Enter verification code</Text>
          <Formik
            initialValues={{token: ''}}
            validationSchema={ConfirmPasswordSchema}
            onSubmit={(values) => {
              console.log("tokVals",values);
              dispatch(ConfirmForgotCode(values))
              setToken(values.token);
              // console.log( "setToken", tokenn)
              
             
            }}>
         
            {props => (
              <>
                <View>
                  {DataConfirm.map(item => (
                    <MyInput
                      name={item.name}
                      value={props.values[item.value]}
                      onChangeText={props.handleChange(item.name)}
                      error={props.errors[item.name]}
                      touched = {props.touched[item.name]}
                      icon={item.icon}
                      placeholder={item.placeholder}
                      placeholderTextColor={"white"}
                      secureTextEntry={item.secureTextEntry}
                    />
                  
                  ))}
                </View>
                <TouchableOpacity
                  onPress={() => {
                    props.handleSubmit()
                    // navigation.navigate("createNewPass")
                    }}
                  style={StylesLogin.button}>
                  <Text style={StylesLogin.btnText}>Confirm</Text>
                </TouchableOpacity>

              </>
            )}
          </Formik>
          <Text>{ConfirmError.error}</Text>
        {/* <Text
        style={ConfirmStyles.titleText}
        >Enter verification code</Text>
        
        <TextInput
        placeholder="* * * * * *"
        style={ConfirmStyles.input} 
        />
        
        <TouchableOpacity
        onPress={()=>{
            navigation.navigate("createNewPass")
        }}
        style={ConfirmStyles.btnView}
        >
            <Text
            style={ConfirmStyles.btnText}
            >Confirm</Text>
        </TouchableOpacity> */}
        </View>
    )
}

export default ConfirmPass