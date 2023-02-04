import {Image, View, Text} from "react-native"
import { SmartStyles } from "./StyleSmartPart"

const HeaderPartSmSearch = () =>{
    return(
        <>
        <Image 
        style={SmartStyles.topImage}
        source={require("./FilterPage.png")}
        />
        <Text style={SmartStyles.titleText}>Smart search</Text>
        </>
    )
}

export default HeaderPartSmSearch