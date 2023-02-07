import { useNavigation } from "@react-navigation/native";
import { TextInput, TouchableOpacity, Text, View} from "react-native";
import  Icon from "react-native-vector-icons/MaterialIcons"
import { HomePageStyle } from "../HOMEPAGE/HomePageStyle"
const SearchPartWhitoutLogin = () =>{
    
    return (
        <View
        style={HomePageStyle.container}
        >
            <View
            style={HomePageStyle.inputView}
            >
           <Text style={HomePageStyle.iconSearch}> <Icon name="search" size={35} color="gray"  /></Text>
           
            <TextInput
        
            style={HomePageStyle.input} 
            placeholder="SEARCH"
            placeholderTextColor="gray"        
            >
            
            </TextInput>

           
            
            </View>
           
        </View>
    )
}

export default SearchPartWhitoutLogin