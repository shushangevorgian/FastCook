import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text,View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign"
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
                <Icon name="plus" size={30} color="gray"  style={{alignSelf: "center"}}/>
            </TouchableOpacity>
        </>
    )
}