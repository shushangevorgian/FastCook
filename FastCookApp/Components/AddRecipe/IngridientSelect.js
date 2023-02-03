import { useEffect, useState } from "react"
import {Touchable, View,Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import SelectDropdown from 'react-native-select-dropdown'
import { useDispatch, useSelector } from "react-redux"
import { GetIngridient } from "../../Redux/Slices/GetIngridientsAsynckThunck"
export const IngridientSelect = ({ingValue, setIngValue,style}) =>{
    const {getIngrigient} = useSelector(state=>state.getIngrigient)
    
    const dispatch = useDispatch()
        useEffect(()=>{
            dispatch(GetIngridient())
   }, [])
   console.log("ingridient" ,getIngrigient)
    console.log("ingVal", ingValue);
   
   
 
    return(
        <>
    <SelectDropdown
    buttonStyle={style}
	data={getIngrigient}
    defaultButtonText="Ingridient"
    buttonTextStyle={{fontSize: 25, color: "grey"}}
    
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		 return(
            setIngValue(selectedItem),
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
