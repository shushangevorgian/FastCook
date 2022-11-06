import {Text, TouchableOpacity, View, ImageBackground} from "react-native"
import { Styles } from "../Styles/HomePageFirstPart";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import Texts from "./Texts";

const HomePageFirsPart = () =>{
    //const navigate = useNavigation()
    return (
        <>
    <ImageBackground
        source={require("../Images/BackgroundImage.png")}
        style={Styles.backgroundImage}
        >
        <View
            style={Styles.titleView}>
                <Texts/>
            </View>
            
            <TouchableOpacity
            style={Styles.button}>
                <Text
                style={Styles.buttonText}
                >Let's start</Text>
            </TouchableOpacity>
            
        </ImageBackground>

        
        </>
    )
}

export default HomePageFirsPart