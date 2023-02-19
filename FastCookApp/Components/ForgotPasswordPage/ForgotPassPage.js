import {Text, TouchableOpacity, View, Image} from "react-native"
import Texts from "./Texts"
import { ForgotPassStyles } from "./ForgotPassStyles"
import { useNavigation } from "@react-navigation/native"
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import { MyInput } from "../Inputs"
import { useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ForgotPage } from "../../Redux/Slices/UserAstyncThunks";
import { TextInput } from "react-native-gesture-handler";
import { useEffect } from "react";
import { DataForgotEmail } from "./DataForgotEmail";
import { ConfirmStyles } from "./ConfirmPasswordStyles";
import { StylesLogin } from "../LoginPage/LoginPageStyle";
import { useSelector } from 'react-redux';
const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
    .email("Required valid email")
    .required('Required valid email'),
    
  });
const  ForgotPassword = () =>{
    const ForgotError = useSelector(state => state.forgot)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    useEffect(() => {
        console.log("success");
        if(ForgotError.successForgot === true){
            navigation.navigate('confirmPass')
        }
      
      },[ForgotError.successForgot])
    return(
        <View
        style={ForgotPassStyles.backgroundView}>
            <View style={ForgotPassStyles.main}>
        <Text
        style={ConfirmStyles.titleText}
        >Enter verification code</Text>
          <Formik
            initialValues={{email: ''}}
            validationSchema={ForgotPasswordSchema}
            onSubmit={(values) => {
              console.log("tokVals",values);
              dispatch(ForgotPage(values))
             
            }}>

            {props => (
              <>
                <View>
                  {DataForgotEmail.map(item => (
                    <MyInput
                    style={ConfirmStyles.textInput}
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
                    ////delete
                    // navigation.navigate('confirmPass')
                    }}
                  style={StylesLogin.button}>
                  <Text style={StylesLogin.btnText}>SEND</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>


        <View
        style={ForgotPassStyles.btnImageView}
        >
                <Image
                style={ForgotPassStyles.btnImage}
                source={require("../Images/forgotPassBgImage.png")}
                />
            
            </View>
            <Text>{ForgotError?.error}</Text>
            </View>
        </View>

        
    )
}

export default ForgotPassword