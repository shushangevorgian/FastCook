import {Text, ImageBackground, View, TouchableOpacity, Image} from "react-native"
import {StlesSignUp} from "./SignUpPageStyle.js"
import { Formik} from 'formik';
import * as Yup from "yup";
import { DataSignUpPage } from "./DataSignUpPage";
import { useDispatch } from "react-redux";
import { MyInput } from "../Inputs";
import ButtomText from "./ButtomLinks";
import { SignUpPage } from "../../Redux/Slices/UserAstyncThunks.js";
const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      email: Yup.string()
      .email("")
      .required('Required valid email'),
      phonenumber: Yup.number()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      confirmpassword: Yup.string()
      .required('Required')
      .oneOf([Yup.ref('password')])


  });
const SignUp = () =>{
    const dispatch =useDispatch()
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
            //dispatch(SignUpPage(values))
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
                    type = {props.values[item.type]}
                    placeholderTextColor={"gray"}
                    placeholder={item.placeholder}
                    icon={item.icon}
                    secureTextEntry= {item.secureTextEntry}
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