import { Text, TouchableOpacity, Image} from "react-native";
import { AddRecipeStyles } from "./AddRecipeStyle"
import ImagePicker from "react-native-image-crop-picker"

import {Colors} from "../Colors"
 export const AddPhoto = ({image, setImage}) =>{
   
    const goToImages = () =>{
    console.log("opening");
        ImagePicker.openPicker({
            margin: 10,
            alignSelf: "flex-start",
            width: 250,
            height: 180,
            paddingVertical: 60,
            backgroundColor: Colors.boxGrey,
            cropping: true
        }).then(image => {
            console.log("image", image);
            setImage(image.path)
            
            
        });
    }
    return(
        <>
        <TouchableOpacity
        onPress={() =>{
            goToImages()
            console.log("hello")
        }}
        style={AddRecipeStyles.addPhotoBtn}
        >
            {image != "" && (
            
            <Image  
            source = {{uri: image}} 
            style={{
                borderRadius: 5,
                width: 250,
                height: 180,

            }}
            />
            )}
            
        </TouchableOpacity>
        </>
    )
}