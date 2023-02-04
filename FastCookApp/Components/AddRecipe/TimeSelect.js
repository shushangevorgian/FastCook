import { useEffect, useState } from "react"
import {Touchable, View,Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import SelectDropdown from 'react-native-select-dropdown'
import { useDispatch, useSelector } from "react-redux"
import { GetTimes } from "../../Redux/Slices/TimeAsyncThunk"


 export const TimeSelect = ({timeValue, setTimeValue,style, timeId,setTimeId }) =>{
    const {dataTime} = useSelector(state=>state.dataTime)
   
    // const countries = ["Egypt", "Canada", "Australia", "Ireland"]
    const dispatch = useDispatch()
        useEffect(()=>{
        dispatch(GetTimes())
   }, [])
   console.log("tiiimeee",dataTime)
   console.log("time val", timeValue);
   console.log("time id", timeId);
   
   
 
    return(
        <>
    
        
        <SelectDropdown
        buttonStyle={style}
        data={dataTime.map(item => item.time)}
        defaultButtonText="Time"
        buttonTextStyle={{fontSize: 25, color: "grey"}}

    
        onSelect={(selectedItem, index) => {
            dataTime.forEach((item)=>{
                if( selectedItem === item.time){
                    setTimeId(item.id)
                }
               
                
            })
        
            
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

