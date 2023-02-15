import { Text,Image } from "react-native"
const SearchPageResult = ({image, title}) =>{
    return(
        <View>
            <Text>{image}</Text>
            <Text>{title}</Text>
        </View>
    )
} 

export default SearchPageResult