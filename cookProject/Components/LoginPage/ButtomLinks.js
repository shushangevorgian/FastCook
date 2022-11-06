import { TouchableOpacity, Text, View,  } from "react-native"
import { StylesLogin } from "./LoginPageStyle"
import { useNavigation } from "@react-navigation/native";
const ButtomText = () => {
    const navigation = useNavigation()
    return(
        <View style={StylesLogin.textView}>
        <TouchableOpacity
        onPress={()=>{
            navigation.navigate("SignUp")
        }}
        >
            <Text
            style={StylesLogin.linkTexts}
            >Sign Up </Text>
        </TouchableOpacity>
        <Text style={StylesLogin.miniText}> or </Text>
        <TouchableOpacity>
            <Text
            style={StylesLogin.linkTexts}
            onPress={()=>{
                navigation.navigate("forgotPassword")
            }}
            > Forgot password </Text>
        </TouchableOpacity>
        </View>
    )
}
export default ButtomText