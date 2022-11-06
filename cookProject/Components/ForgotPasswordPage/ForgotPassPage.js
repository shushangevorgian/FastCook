import {Text, TouchableOpacity, View, Image} from "react-native"
import Texts from "./Texts"
import { ForgotPassStyles } from "./ForgotPassStyles"
import { MyInput } from "../Inputs"
const  ForgotPassword = () =>{
    return(
        <View
        style={ForgotPassStyles.backgroundView}>
            <View 
            style= {ForgotPassStyles.textsView}
            >
            <Texts/>
            </View>
            <View style={ForgotPassStyles.inputView}>
                <MyInput/>
            </View>
            <TouchableOpacity
            style={ForgotPassStyles.btn}
            >
                <Text
                style={ForgotPassStyles.btnText}
                >Next</Text>
            </TouchableOpacity>

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