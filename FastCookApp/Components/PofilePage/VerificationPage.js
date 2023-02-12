import { useNavigation } from '@react-navigation/native'
import {View, Text, TouchableOpacity, ImageBackground} from'react-native'

const Verificationpage = () =>{
    const navigation = useNavigation()
    return(
        <ImageBackground
        source={require('../SavePage/save.jpg')}
        style={{ flex:1,
            opacity: 0.7,
            backgroundColor: "white",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center"
            
        }}
        >
            <View
            style={{flexDirection:"column", 
            alignContent: "center", 
            alignSelf: "center", 
            justifyContent: "center",
            height: 300,
            width: 220,
            backgroundColor: "gray",
            borderColor: "black",
            borderWidth: 0.5,
            borderRadius: 10
        }}
            >

                <Text
                style={{
                alignSelf: "center",
                color: "white",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: 20}}
                >
                Thanks! 
                </Text>
                <Text
                style={{
                    fontSize: 16,
                    color: "white",
                    alignSelf: "center",

                }}
                >
                Will confirm your new recipe soon
                </Text>
                <TouchableOpacity
                onPress={() =>{
                    navigation.navigate('PROFILE')
                }}
                 style={{
                    margin: 5,
                 backgroundColor:"orange",
                 borderRadius: 5,
                 width: 90,
                 height: 30,
                 alignSelf: "center",
                 justifyContent: "center",
                 alignContent: "center",
                 }}
                >
                    <Text
                    style={{color: "white",
                    fontSize: 16,
                    fontWeight: "bold",
                    textAlign: "center",
                    justifyContent: "center",
                    alignSelf: "center"}}
                    >Go Back</Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>
          
        )
}

export default Verificationpage