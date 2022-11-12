import { Text, View, TouchableOpacity} from "react-native"
import { MyInput } from "../Inputs"
import { ConfirmStyles } from "./ConfirmPasswordStyles"
import Icons  from "react-native-vector-icons/AntDesign"
import { useNavigation } from "@react-navigation/native"
const CreateNewPass = () =>{
    const navigation = useNavigation()
    return(
        <View style={ConfirmStyles.createContainer}>
            <Text
            style={ConfirmStyles.titleText}
            >Write your new password</Text>
            <View style={ConfirmStyles.inputsView}>
            <MyInput
            icon={<Icons  name="lock" size={30} color="gray"/>}
            placeholder="Enter new password"
            />
            <MyInput
            icon={<Icons  name="lock" size={30} color="gray"/>}
             placeholder="Confirm Password"
            />
            </View>
        <TouchableOpacity
        onPress={() =>{
            navigation.navigate("Login")
        }}
        style={ConfirmStyles.btnView}
        >
            <Text
            style={ConfirmStyles.btnText}
            >Change</Text>
        </TouchableOpacity>
        </View>
    )
}

export default CreateNewPass