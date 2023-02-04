import { useState } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CategoryChoiceChoicePart from "./CategoryChoice";
import HeaderPartSmSearch from "./HeaderPart";
import TimeChoicePart from "./TimeChoicePart";

const MainPageSmartSearch = () =>{
    const [searchTimeValue, setSearchTimeValue] = useState('')
    const [searchTimeId, setSearchTimeId] = useState('')
    const [searchCategory, setSearchCaegory] = useState('')
    const [searchCategoryId, setSearchCategoryId] = useState('')
    return(
        <>
        <HeaderPartSmSearch/>
        <View>
        <TimeChoicePart
         searchTimeValue={searchTimeValue}
         setSearchTimeValue={setSearchTimeValue}
         searchTimeId={searchTimeId}
         setSearchTimeId={setSearchTimeId}
        />
        <CategoryChoiceChoicePart
        searchCategory={searchCategory}
        setSearchCaegory={setSearchCaegory}
        searchCategoryId={searchCategoryId}
        setSearchCategoryId={setSearchCategoryId}
        />
        {/* ingredients */}
        </View>
        <TouchableOpacity
        
        >
            <Text>Find</Text>
        </TouchableOpacity>
        </>
    )
}


export default MainPageSmartSearch
