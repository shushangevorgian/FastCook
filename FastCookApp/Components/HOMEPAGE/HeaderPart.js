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
        dispath(SetAvatar(image.path))
        
      });
}

    return (
        <View
        style={HomePageStyle.container}
        >

            <Text>Name LastName</Text>
            <Text>{AvatarError?.error}</Text>
            <TouchableOpacity
            style= {{
                height:60,
                width: 60,
                borderRadius: 100,
                backgroundColor: 'green'
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