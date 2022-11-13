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
const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
    .email("")
    .required('Required valid email'),
    
  });
const  ForgotPassword = () =>{
    const dispatch = useDispatch()
    const navigation = useNavigation()
    return(
        <View
        style={ForgotPassStyles.backgroundView}>
            <View 
            style= {ForgotPassStyles.textsView}
            >
            <Texts/>
            </View>
            <Formik
            initialValues={{email: ''}}
            validationSchema={ForgotPasswordSchema}
            onSubmit={values => {
              console.log(values);
             //dispatch(ForgotPage(values))
             
            }}>
            {props => (
                <>
            <View style={ForgotPassStyles.inputView}>
                <MyInput
                name="email"

                // value={props.values("email")}
                // onChangeText={props.handleChange(("email"))}
                //error={props.errors("email")}
                // touched = {props.touched("email")}
                icon = {<Icon name="email-outline" size={30} color="gray" />}
                placeholder={"Enter your email"}
                />
            </View>
            <TouchableOpacity
            style={ForgotPassStyles.btn}
            onPress={() =>{
                props.handleSubmit()
                navigation.navigate('confirmPass')
            }}
            >
                <Text
                style={ForgotPassStyles.btnText}
                >Next</Text>
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
        </View>

        
    )
}

export default ForgotPassword