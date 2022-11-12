import {Text, View} from "react-native"
import { HomePageStyle } from "./HomePageStyle"

const HeaderPart = () =>{
    return (
        <View
        style={HomePageStyle.container}
        >

            <Text>Name LastName</Text>
            <Text>nkar</Text>
        </View>
    )
}


export default HeaderPart