import { TouchableOpacity, Text, View,  } from "react-native"
import { StlesSignUp } from "./SignUpPageStyle"
import { useNavigation } from "@react-navigation/native";
const ButtomText = () => {
    const navigation = useNavigation()
    return(
        <View style={StlesSignUp.textView}>
            <Text
            style={StlesSignUp.texts}
            >Already have an account?</Text>
      
        <TouchableOpacity
        onPress={()=>{
            navigation.navigate("Login")
        }}
        >
            <Text
            style={StlesSignUp.StlesSignUp}
            > Login </Text>
        </TouchableOpacity>
        </View>
    )
}
export default ButtomText