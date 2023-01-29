import {Text, ImageBackground, View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import {StylesLogin} from './LoginPageStyle';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import ButtomText from './ButtomLinks';
import {DataforInputs} from '../DataForInputs';
import {MyInput} from '../Inputs';
import { useSelector } from 'react-redux';
import { LoginPage } from '../../Redux/Slices/UserAstyncThunks';
import { useEffect } from 'react';
import { greaterOrEq } from 'react-native-reanimated';
const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(' username Required'),
  
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(' password Required'),
});



const Login = () => {
  const LoginError = useSelector(state => state.user)
console.log(LoginError,'Error')
  const dispatch = useDispatch()
  const navigation = useNavigation()

  // useEffect(()=>{
  //   console.log(LoginError.success,"succcccses")
  //   if(LoginError.success){
  //     navigation.navigate("loggedInHomePage")
  //   }
    
  // },[])
  useEffect(() => {
    console.log("success");
    if(LoginError.success === true){
        navigation.navigate("loggedInHomePage")
    }
  
  },[LoginError.success])
  return (
    <>
      <ImageBackground
        source={require('../Images/LoginBgImage.png')}
        style={StylesLogin.backgroundImage}>
        <View style={StylesLogin.FormikView}>
          <Text style={StylesLogin.title}>Login</Text>
          <Formik
            initialValues={{username: '', password: ''}}
            validationSchema={SignupSchema}
            onSubmit={values => {
              console.log(values);
              dispatch(LoginPage(values))
            
      
             
            
             
            }}>

            {props => (
              <>
                <View>
                  {DataforInputs.map(item => (
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
                  <Text style={StylesLogin.btnText}>Login</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>

          <View style={StylesLogin.textComponentView}>
            <ButtomText />
          </View>
          <Text> {LoginError?.error}</Text>
        </View>
      </ImageBackground>
    </>
  );
};
export default Login;
