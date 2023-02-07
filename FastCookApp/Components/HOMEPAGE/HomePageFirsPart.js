import {Text, TouchableOpacity, View, ImageBackground} from "react-native"
import { Styles } from "../Styles/HomePageFirstPart";
import { useNavigation } from "@react-navigation/native";
import Texts from "./Texts";
import Icon from "react-native-vector-icons/FontAwesome";

const HomePageFirsPart = () =>{
    const navigation = useNavigation()
    return (
        <>

    <ImageBackground
        source={require("../Images/BackgroundImage.png")}
        style={Styles.backgroundImage}
        >
            <TouchableOpacity 
            onPress={() => navigation.openDrawer()} 
            style={{marginLeft: 10,
            marginTop: 10
            }}>
            <Icon name="navicon" size={35} color="gray"  />
            </TouchableOpacity>
        <View
            style={Styles.titleView}>
                <Texts/>
            </View>
            
            <TouchableOpacity
            onPress= {() =>{
                navigation.navigate('mainHomePage')
            }}
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