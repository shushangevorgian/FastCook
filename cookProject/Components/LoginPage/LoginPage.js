import {Text, ImageBackground, View, TouchableOpacity} from "react-native"
import { StylesLogin } from "./LoginPageStyle";
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import ButtomText from "./ButtomLinks";
import { DataforInputs } from "../DataForInputs"
import { MyInput } from "../Inputs";
// import { useNavigation } from "@react-navigation/native";
const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });
const Login = () =>{
    // const navigation = useNavigation()
    return(
        <>
        
        <ImageBackground
        source={require("../Images/LoginBgImage.png")}
        style= {StylesLogin.backgroundImage}
        >
            
       <View
        style={StylesLogin.FormikView}>
            <Text
            style={StylesLogin.title}
            >Login</Text>
        <Formik
        initialValues={{name: '', password: ''}}
        validationSchema={SignupSchema}
        onSubmit={(values) =>{
            console.log(values);
        }}


        >
        {(props) =>(
            <>
            <View
            
           >
            {DataforInputs.map((item)=>(
                <MyInput
                name={item.name}
                title="LOGIN"
                value={props.values[item.value]}
                handleSubmit={props.handleSubmit}

                />
            ))}
         </View>   
        <TouchableOpacity
        style={StylesLogin.button}
                >
                    <Text
                    style={StylesLogin.btnText}
                    >Login</Text>
                 </TouchableOpacity>
</>
                )}
                </Formik>

                <View
                    style={StylesLogin.textComponentView}
        
                >
                    <ButtomText/>
                </View>
                    
                </View>

        
        
            
        </ImageBackground>

        </>

        
    )
}
export default Login