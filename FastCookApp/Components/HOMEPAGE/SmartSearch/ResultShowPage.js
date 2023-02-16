import { useNavigation } from "@react-navigation/native"
import {Text, View, ImageBackground,} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

const ResultShowPage = () =>{
    const  navigation = useNavigation()
    return(
        <ImageBackground
        style={{
            flex: 1,
            opacity: 0.6,
            alignContent: "center",
            alignItems: 'center',
            justifyContent: "center"
        }}
        source={require('./save.jpg')}
        >
            <View
            style={{
                height: 150,
                width:220,
                borderWidth: 0.5,
                borderColor: "black",
                alignContent: "center",
                alignItems: 'center',
                borderRadius: 5,
                justifyContent: "center"
            }}
            >
            <Text
            style={{
                fontSize: 20,
                color: "black",
                fontWeight: "bold"
            }}
            >
            No such recipe found

            </Text>
            <TouchableOpacity
                onPress={() =>{
                    navigation.navigate('HOME')
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

export default ResultShowPage