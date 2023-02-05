import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { useState } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { FilterSearch } from "../../../Redux/Slices/filterSearchAsynckTunck";
import { AddRecipeStyles } from "../../AddRecipe/AddRecipeStyle";
import CategoryChoiceChoicePart from "./CategoryChoice";
import HeaderPartSmSearch from "./HeaderPart";
import IngredientChoice from "./ingredientChoice";
import TimeChoicePart from "./TimeChoicePart";

const MainPageSmartSearch = () =>{
    const dispatch =useDispatch()
    const navigation = useNavigation()
    const fiterData = useSelector(state=> state.filterSearch)
    console.log( "filter Data", fiterData)
    useEffect(() => {
        if(fiterData.success === true){
            navigation.navigate('Login')
            console.log("valssssssssss===",fiterData.success )
        }
       
      },[fiterData.success])

    const [searchTimeValue, setSearchTimeValue] = useState('')
    const [searchTimeId, setSearchTimeId] = useState('')
    const [searchCategory, setSearchCaegory] = useState('')
    const [searchCategoryId, setSearchCategoryId] = useState('')
    const [selectedIng, setSelectedIng] = useState([]);
    const [error, setError] = useState({field: '', message: ''})
    const [ingredientChoiceid, setIngridientChoiceId ] = useState([])
    const onPress = () =>{

        const loginError = {field: '', message: ''}
        if (searchTimeValue === ''){
            loginError.field = "searchTimeValue";
            loginError.message = 'this field is required'
            setError(loginError)
        }
        else if (searchCategory === ''){
            loginError.field = "searchCategory";
            loginError.message = "this field is required"
            setError(loginError)
        }
        else if(selectedIng.length === 0) {
            loginError.field = "selectedIng";
            loginError.message = "this field is required"
            setError(loginError)
        }
        // }else if(description.length <= 50){
        //     loginError.field = "description"
        //     loginError.message = "moreee"
        //     setError(loginError)
        // }
        else{
            console.log("ok, create");
            dispatch(FilterSearch({searchCategoryId,ingredientChoiceid,searchTimeId }))
        }
    }
    
    
    return(
        <>
        <HeaderPartSmSearch/>
        <View style={{width: "auto", margin: 5}}>
        <TimeChoicePart
         searchTimeValue={searchTimeValue}
         setSearchTimeValue={setSearchTimeValue}
         searchTimeId={searchTimeId}
         setSearchTimeId={setSearchTimeId}
        />
         {error.field === "searchTimeValue" && (
            <Text style={{fontSize: 16, color: "red"}}>{error.message}</Text>
        )}
        <CategoryChoiceChoicePart
        searchCategory={searchCategory}
        setSearchCaegory={setSearchCaegory}
        searchCategoryId={searchCategoryId}
        setSearchCategoryId={setSearchCategoryId}
        />
         {error.field === "searchCategory" && (
            <Text style={{fontSize: 16, color: "red"}}>{error.message}</Text>
        )}
        <IngredientChoice
        selectedIng={selectedIng}
        setSelectedIng={setSelectedIng}
        ingredientChoiceid={ingredientChoiceid}
        setIngridientChoiceId={setIngridientChoiceId}
        />
        {error.field === "selectedIng" && (
            <Text style={{fontSize: 16, color: "red"}}>{error.message}</Text>
        )}
        </View>
        <TouchableOpacity
        style={AddRecipeStyles.btn}
        onPress={() => {onPress()}}
        >
            <Text
            style={AddRecipeStyles.btnText}
            >Find</Text>
        </TouchableOpacity>
        </>
    )
}


export default MainPageSmartSearch
