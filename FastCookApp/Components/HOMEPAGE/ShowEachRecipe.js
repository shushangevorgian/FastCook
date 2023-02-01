import  {View, TouchableOpacity, Text, ScrollView, ImageBackground} from "react-native"
import { useRoute } from "@react-navigation/native"
import { eachPicture } from "./StylesForHomePage/ShowEachPictureStyle.js"
const ShowEachPage = () =>{
    const route = useRoute()
    const {id, image, title, body} = route.params
    return (
        <ScrollView>
        <View style ={eachPicture.mainContainer}>
        <View style={eachPicture.titleView}><Text style={eachPicture.titleText}>{title}</Text></View>
        <ImageBackground style= {eachPicture.imageComponent}><Text style={eachPicture.imageComponent}>{image}</Text></ImageBackground>
        <Text style={eachPicture.bodyText}>{body}</Text> 
        </View>
        </ScrollView>
    )
}

export default ShowEachPage