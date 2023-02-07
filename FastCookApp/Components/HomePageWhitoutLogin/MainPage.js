import {Text, View,Image} from "react-native"
import SearchPartWhitoutLogin from "./SearchPartWhitoutLogin"
import ShowPickturesWhitoutLogin from "./ShowPickturesWhitoutLogin"
import { Colors } from "../Colors"

const MainHomePage = () =>{
    return(
        <View
        style={{backgroundColor: Colors.boxGrey,}}
        >
        <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
        <Text
        style={{textAlign: "center", marginTop: 25, marginLeft: 15, fontSize: 28, }}
        >Fast Cook</Text>
       <Image
       style={{alignSelf: "flex-end", margin:10, color: "#EEC18E "}}
       source={require("../Images/LogoOrange.png")}
       />
        </View>
        <SearchPartWhitoutLogin/>
        <ShowPickturesWhitoutLogin/>
        </View>
    )
}


export default MainHomePage