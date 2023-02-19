import {Text, View, TouchableOpacity, Image} from "react-native"
import { HomePageStyle } from "./HomePageStyle"
//import {Avatar} from "@rneui/themed"
import ImagePicker from "react-native-image-crop-picker"
import {useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { SetAvatar } from "../../Redux/Slices/AvatarAsyncThunk"

const HeaderPart = () =>{
const [image, setImage] = useState("");
const AvatarError = useSelector(state => state.avatarStore)
const username = useSelector(state=>state.user)
// console.log("username", username.user.username)
const dispath = useDispatch()
const goToImages = () =>{
  console.log("opening");
    ImagePicker.openPicker({
        width: 60,
        height: 60,
        borderRadius:100,
        cropping: true
      }).then(image => {
        console.log("image", image);
        setImage(image.path)
        dispath(SetAvatar(image))
        
      });
}

    return (
        <View
        style={HomePageStyle.container}
        >

            <Text style={{fontSize: 28, color: "orange", fontWeight: "bold"}}>{username.user.username}</Text>
            <Text>{AvatarError?.error}</Text>
            <TouchableOpacity
            style= {{
                height:60,
                width: 60,
                borderRadius: 100,
                backgroundColor: 'grey'
            }}
            onPress={() =>{
            goToImages()
            console.log("hello")
           }}
          > 
          {image != "" && (
            
            <Image  
            source = {{uri: image}} 
            style={{
                height:60,
                width: 60,
                borderRadius: 100, }}
            />
            )}
          
          </TouchableOpacity>
        </View>
    )
}


export default HeaderPart