import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text,View } from "react-native";

export const IngridientCreateButton = ({style}) =>{
    const navigation = useNavigation()
    return(
        <>
            <TouchableOpacity
            onPress={()=>{
                navigation.navigate('addIngridient')
            }}
            style={style}
            >
                <Text>Create</Text>
            </TouchableOpacity>
        </>
    )
}