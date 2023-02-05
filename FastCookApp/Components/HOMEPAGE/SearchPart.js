import { useNavigation } from "@react-navigation/native";
import { TextInput, TouchableOpacity, Text, View} from "react-native";
import  Icon from "react-native-vector-icons/MaterialIcons"
import { HomePageStyle } from "./HomePageStyle";
const SearchPart = () =>{
    const navigation = useNavigation()
    return (
        <View
        style={HomePageStyle.container}
        >
            <View
            style={HomePageStyle.inputView}
            >
           <Text style={HomePageStyle.iconSearch}> <Icon name="search" size={25} color="gray"  /></Text>
            <TextInput
            
            style={HomePageStyle.input} 
            placeholder="SEARCH"
            placeholderTextColor="gray"        
            />
            </View>
            <TouchableOpacity
            onPress={() =>{
                navigation.navigate('mainSmartSearch')
            }}
            >
            <Text
            style={HomePageStyle.iconFillter}
            >
            <Icon name="filter-list" size={25} color="gray"/>
            </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SearchPart