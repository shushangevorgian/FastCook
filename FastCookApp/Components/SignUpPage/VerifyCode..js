import {Text, View, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {StylesLogin} from '../LoginPage/LoginPageStyle';
import {Formik, Form, Field} from 'formik';
import { useEffect } from 'react';
import { ConfirmStyles } from '../ForgotPasswordPage/ConfirmPasswordStyles';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import ButtomText from './ButtomLinks';
import {MyInput} from '../Inputs';
import { useSelector } from 'react-redux';
import { DataVarify } from './DataForVerify';
import { CheckCodeVerify } from '../../Redux/Slices/UserAstyncThunks';
const SignupSchema = Yup.object().shape({
    token: Yup.number()
      .min(4, 'Too Short!')
      .required(' username Required'),
  
  
});



const VerifyCode = () => {
  const VerifyError = useSelector(state => state.user)
console.log(VerifyError,'Error')
  const dispatch = useDispatch()
  const navigation = useNavigation()
  useEffect(() => {
    console.log("success");
    if(VerifyError.success === true){
        navigation.navigate("Login")
    }
  
  },[VerifyError.success])

  return (
    <>
      
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
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              console.log("tokVals",values);
              dispatch(CheckCodeVerify(values))
             
            }}>

            {props => (
              <>
                <View>
                  {DataVarify.map(item => (
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
              
                    }}
                  style={StylesLogin.button}>
                  <Text style={StylesLogin.btnText}>Confirm</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
                      {<Text>{VerifyError?.error}</Text>}
                  

          {/* <Text> {LoginError?.error}</Text> */}
       
     </View>
    </>
)}

export default VerifyCode
