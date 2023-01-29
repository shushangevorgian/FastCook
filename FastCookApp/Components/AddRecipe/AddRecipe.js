import {Text, TouchableOpacity, View, Image} from "react-native"
import { AddRecipeStyles } from "./AddRecipeStyle"
const AddRecipe = () =>{
    return(
        <>
        <TouchableOpacity
        style={AddRecipeStyles.addPhotoBtn}
        >
            <Text>Add Photo</Text>
        </TouchableOpacity>

        <View>
            
        </View>
        </>
    )
}

export default AddRecipe