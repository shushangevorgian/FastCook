import { useEffect } from "react";
import { useState } from "react";
import { Text, View,  } from "react-native";
import { longPressHandlerName } from "react-native-gesture-handler/lib/typescript/handlers/LongPressGestureHandler";
import SelectDropdown from "react-native-select-dropdown";
import StepIndicator from 'react-native-step-indicator';
import { useDispatch, useSelector } from "react-redux";
import { GetCategory } from "../../../Redux/Slices/CategoryAsyncThunck";
import { Colors } from "../../Colors";
import Icon from "react-native-vector-icons/AntDesign"
const CategoryChoiceChoicePart = ({searchCategory,setSearchCaegory,searchCategoryId, setSearchCategoryId}) =>{
    const {data} = useSelector(state => state.data)
    
    const dispatch = useDispatch()
        useEffect(()=>{
        dispatch(GetCategory())
   }, [])
    console.log(searchCategory, "current category value" )
    console.log(searchCategoryId, "choised id");
    return(
        <>
    <SelectDropdown
     renderDropdownIcon={()=> {
        return (
            <Icon name="down" size={15} color="gray" />
        )
            
        
    }}
        multiselect={true}
        buttonStyle={{ width: "auto",
        height: 40,
        backgroundColor: Colors.boxGrey}}
        data={data.map(item => item.name)}
        defaultButtonText="Category"
        buttonTextStyle={{fontSize: 25, color: "grey"}}

    
        onSelect={(selectedItem, index) => {
            data.forEach((item)=>{
                if( selectedItem === item.name){
                    setSearchCategoryId(item.id)
                }
               
                
            })
        
            
        }}

	buttonTextAfterSelection={(selectedItem, index) => {
		 return(
            setSearchCaegory(selectedItem),
            selectedItem
         )
    }}
	rowTextForSelection={(item, index) => {
	    return item
    }}
    
    />

    </>
    
    )
}


export default  CategoryChoiceChoicePart