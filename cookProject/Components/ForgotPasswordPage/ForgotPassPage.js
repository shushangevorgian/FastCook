import {Text, TouchableOpacity, View, Image} from "react-native"
import Texts from "./Texts"
import { ForgotPassStyles } from "./ForgotPassStyles"
import { useNavigation } from "@react-navigation/native"
import { MyInput } from "../Inputs"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const  ForgotPassword = () =>{
    const navigation = useNavigation()
    return(
        <View
        style={ForgotPassStyles.backgroundView}>
            <View 
            style= {ForgotPassStyles.textsView}
            >
            <Texts/>
            </View>
            <View style={ForgotPassStyles.inputView}>
                <MyInput
                icon = {<Icon name="email-outline" size={30} color="gray" />}
                placeholder={"Enter your email"}
                />
            </View>
            <TouchableOpacity
            style={ForgotPassStyles.btn}
            onPress={() =>{
                navigation.navigate('confirmPass')
            }}
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