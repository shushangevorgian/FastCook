import {Text, View, ImageBackground,} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

const SavePage = () =>{
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
            There are no recipes saved yet!

            </Text>
            {/* <TouchableOpacity
            style={{
                marginTop: 20,
                alignContent: "center",
                alignItems: 'center',
                borderRadius: 5,
                backgroundColor: "orange",
                justifyContent: "center"
            }}
            >
                <Text>
                    Go back
                </Text>
            </TouchableOpacity> */}
            </View>


        </ImageBackground>
        
    )
}

export default SavePage