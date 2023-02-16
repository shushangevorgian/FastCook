import {Image, TouchableOpacity, Text, View} from "react-native"
import ImagePicker from "react-native-image-crop-picker"
import {ProfileStyles} from "./ProfilePageStyle.js";
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from "react-redux";
export const ProfileHeader = () =>{
const username = useSelector(state=>state.user.username)
const navigation = useNavigation()
const logOut = () => {
      AsyncStorage.clear()
      navigation.navigate('Login')
}
/////add dispatch part
const showPictures = () =>{
    ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        console.log("image", image);
        
        
      });
}
        return (
           <View
           style = {ProfileStyles.headerVew}
           >
            <TouchableOpacity
            style={ProfileStyles.imageButton}
            onPress={() =>{
                showPictures()
                console.log("selected!")
               }}
            >

            </TouchableOpacity>
            <Text
            style = {ProfileStyles.title}
            >
                {username}
            </Text>
            <TouchableOpacity
            style={ProfileStyles.logOutBtn}
            onPress = {() => {
              logOut()
              console.log(" log out!")
          }}
            > 
                <Text
                style={ProfileStyles.logOutBtnText}
                >LOG OUT</Text>
            </TouchableOpacity>
           </View>
        )
}