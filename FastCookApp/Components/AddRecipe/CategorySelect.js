import { useEffect, useState } from "react"
import {Touchable, View,Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import SelectDropdown from 'react-native-select-dropdown'
import { useDispatch, useSelector } from "react-redux"
import { GetCategory } from "../../Redux/Slices/CategoryAsyncThunck"



 export const CategorySelect = ({categoryValue,setCategoryValue,style}) =>{
    const {category} = useSelector(state => state.category)
    const dispatch = useDispatch()
        useEffect(()=>{
        dispatch(GetCategory())
   }, [])
   console.log("category",category)
   console.log("category val", categoryValue);
   
   
 
    return(
        <>
    <SelectDropdown
    buttonStyle={style}
	data={category}
    defaultButtonText="Category"
    buttonTextStyle={{fontSize: 25, color:"grey"}}

    
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		 return(
            setCategoryValue(selectedItem),
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
