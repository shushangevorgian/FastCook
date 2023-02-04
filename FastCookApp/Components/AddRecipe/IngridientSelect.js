import { useEffect, useState } from "react"
import {Touchable, View,Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import SelectDropdown from 'react-native-select-dropdown'
import { useDispatch, useSelector } from "react-redux"
import { GetIngridient } from "../../Redux/Slices/GetIngridientsAsynckThunck"
export const IngridientSelect = ({ingValue, setIngValue,style, ingridientId, setIngridientId}) =>{
    const {getIngrigient} = useSelector(state=>state.getIngrigient)
    
    const dispatch = useDispatch()
        useEffect(()=>{
            dispatch(GetIngridient())
   }, [])
   console.log("ingridientssssssss" ,getIngrigient)
    console.log("ingVal", ingValue);
    console.log("choseId", ingridientId)
   
   
 
    return(
        <>
    <SelectDropdown
    buttonStyle={style}
    data={getIngrigient.map(item => item.name)}
    defaultButtonText="Ingridient"
    buttonTextStyle={{fontSize: 25, color: "grey"}}
    
	onSelect={(selectedItem, index) => {
        getIngrigient.forEach((item)=>{
            if( selectedItem === item.name){
                setIngridientId(item.id)
            }
           
            
        })
    
        
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
