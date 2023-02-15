import {Text, ImageBackground, View, TouchableOpacity, Image} from "react-native"
import {StlesSignUp} from "./SignUpPageStyle.js"
import { Formik} from 'formik';
import * as Yup from "yup";
import {useEffect} from "react";
import { DataSignUpPage } from "./DataSignUpPage";
import { useDispatch, useSelector } from "react-redux";
import { MyInput } from "../Inputs";
import ButtomText from "./ButtomLinks";
import { useNavigation } from "@react-navigation/native";
import { SignUpPage } from "../../Redux/Slices/UserAstyncThunks.js";
const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    name:  Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email("")
      .required('Required valid email'),
    phone: Yup.number()
      .min(50, 'Too Short!')
      .required('Required'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    
    
    //   confirmpassword: Yup.string()
    //   .required('Required')
    //   .oneOf([Yup.ref('password')])


  });
const SignUp = () =>{
    const SignUpError = useSelector(state => state.signUp) 
    const navigation = useNavigation()
    useEffect(() => {
      console.log("success");
      if(SignUpError.success === true){
          navigation.navigate("verifyCode")
      }
    
    },[SignUpError.success])

    const dispatch = useDispatch()
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
        initialValues={{username: '', name: '', email: '', phone: '', password: '', }}
        validationSchema={SignupSchema}
        onSubmit={(values) =>{
            console.log("VALS", values);
            dispatch(SignUpPage(values))
        }}


        >
        {(props) =>(
            <>
            <View
            style={StlesSignUp.inputView}
           >
            {DataSignUpPage.map((item)=>(
             
                <MyInput
                    style={StlesSignUp.textInput}
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
            console.log("ok")
            props.handleSubmit()
            
        
        }

    }>
                    <Text
                    style={StlesSignUp.btnText}
                    >Sign Up</Text>
                 </TouchableOpacity>
                

                 <View>
                 <ButtomText/>
                 <Text style={{
                fontWeight: "bold",
                  textAlign: "center",
                  color: "red",
                  fontSize: 30
                }}> {SignUpError?.error}</Text>
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