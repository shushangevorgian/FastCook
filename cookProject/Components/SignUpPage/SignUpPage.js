import {Text, ImageBackground, View, TouchableOpacity, Image} from "react-native"
import { StylesLogin } from "../LoginPage/LoginPageStyle";
import {StlesSignUp} from "./SignUpPageStyle.js"
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import { DataSignUpPage } from "./DataSignUpPage";
import { DataforInputs } from "../DataForInputs"
import { MyInput } from "../Inputs";
import ButtomText from "./ButtomLinks";
const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      //email: Yup.email()
    
  });
const SignUp = () =>{
    return(
        <>
        
        <ImageBackground
        source={require("../Images/SignInBgImage.png")}
        style= {StlesSignUp.backgroundImage}
        >
            
       <View
        style={StlesSignUp.formikView}>
        <Image
        style={StlesSignUp.logo}
        source={require("../Images/LogoOrange.png")}
        />
            <Text
            style={StlesSignUp.title}
            >WELCOME!</Text>
            <Text
            style={StlesSignUp.texts}
            >
                Create an account to continue!
            </Text>
        <Formik
        initialValues={{username: '', password: '', email: '', phonenumber: '', confirmpassword: ''}}
        validationSchema={SignupSchema}
        onSubmit={(values) =>{
            console.log(values);
        }}


        >
        {(props) =>(
            <>
            <View
            style={StlesSignUp.inputView}
           >
            {DataSignUpPage.map((item)=>(
             
                <MyInput
                    name={item.name}
                    value={props.values[item.value]}
                    onChangeText={props.handleChange(item.name)}
                    error={props.errors[item.name]}
                    touched = {props.touched[item.name]}
              />
  
            ))}
         </View>   
        <TouchableOpacity
        style={StlesSignUp.button}
        onPress={()=>{
        
                props.handleSubmit()
        }

    }>
                    <Text
                    style={StlesSignUp.btnText}
                    >Sign Up</Text>
                 </TouchableOpacity>

                 <View>
                 <ButtomText/>
                 </View>
</>
                )}
                </Formik>

                
                    
                </View>

        
        
            
        </ImageBackground>

        </>

        
    )
}
export default SignUp