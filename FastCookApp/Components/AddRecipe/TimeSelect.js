import { useEffect, useState } from "react"
import {Touchable, View,Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import SelectDropdown from 'react-native-select-dropdown'
import { useDispatch, useSelector } from "react-redux"
import { GetTimes } from "../../Redux/Slices/TimeAsyncThunk"


 export const TimeSelect = ({timeValue, setTimeValue,style}) =>{
    const {time} = useSelector(state=>state.time)
   
    // const countries = ["Egypt", "Canada", "Australia", "Ireland"]
    const dispatch = useDispatch()
        useEffect(()=>{
        dispatch(GetTimes())
   }, [])
   console.log("tiiimeee",time)
   console.log("time val", timeValue);
   
   
 
    return(
        <>
    
        <Text>{time?.error}</Text>
        <SelectDropdown
        buttonStyle={style}
        data={time}
        defaultButtonText="Time"
        buttonTextStyle={{fontSize: 25, color: "grey"}}

    
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		 return(
            setTimeValue(selectedItem),
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

