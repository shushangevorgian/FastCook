import {Text, ImageBackground, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {StylesLogin} from './LoginPageStyle';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import ButtomText from './ButtomLinks';
import {DataforInputs} from '../DataForInputs';
import {MyInput} from '../Inputs';
import { LoginPage } from '../../Redux/Slices/UserSlice';
// import { useNavigation } from "@react-navigation/native";
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
  const dispatch = useDispatch()
  const navigation = useNavigation()
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
              // dispatch(LoginPage(values))
             
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
                      placeholderTextColor={"white"}
                      // autoComplete={item.autoComplete}
                    />
                  
                  ))}
                </View>
                <TouchableOpacity
                  onPress={() => {
                    props.handleSubmit()
    
                    
                   // navigation.navigate("forgotPassword")

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
        </View>
      </ImageBackground>
    </>
  );
};
export default Login;
