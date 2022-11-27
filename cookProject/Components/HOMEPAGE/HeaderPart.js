import {Text, View} from "react-native"
import { HomePageStyle } from "./HomePageStyle"
import {Avatar} from "@rneui/themed"

const HeaderPart = () =>{



    return (
        <View
        style={HomePageStyle.container}
        >

            <Text>Name LastName</Text>
            <Avatar
           size={60}
           rounded
           title="P"
           containerStyle={{ backgroundColor: 'coral' }}
           onPress={() =>{
            console.log("hello")
           }}
            />
        </View>
    )
}


export default HeaderPart