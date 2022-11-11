import React from  "react";
import { View, TextInput, TouchableOpacity, Text, Image} from "react-native";
import { ConfirmStyles } from "./ConfirmPasswordStyles";
import { useNavigation } from "@react-navigation/native";
const ConfirmPass = () => {
    const navigation = useNavigation()
    return(
        <View
        style={ConfirmStyles.container}
        >
            <View
            style={ConfirmStyles.imageView}
             >
            <Image
            style={{
                alignSelf: "center",
                
            }}
            source={require('../Images/LogoOrange.png')}
            />
            </View>
        <Text
        style={ConfirmStyles.titleText}
        >Enter verification code</Text>
        
        <TextInput
        placeholder="* * * *"
        style={ConfirmStyles.input} 
        />
        
        <TouchableOpacity
        onPress={()=>{
            navigation.navigate("Login")
        }}
        style={ConfirmStyles.btnView}
        >
            <Text
            style={ConfirmStyles.btnText}
            >Confirm</Text>
        </TouchableOpacity>
        </View>
    )
}

export default ConfirmPass