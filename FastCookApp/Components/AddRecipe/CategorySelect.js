import { useEffect, useState } from "react"
import {Touchable, View,Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import SelectDropdown from 'react-native-select-dropdown'
import { useDispatch, useSelector } from "react-redux"
import { GetCategory } from "../../Redux/Slices/CategoryAsyncThunck"



 export const CategorySelect = ({categoryValue,setCategoryValue,style,categoryid, setCategoryId }) =>{
  const {data} = useSelector(state => state.data)
    
    const dispatch = useDispatch()
        useEffect(()=>{
        dispatch(GetCategory())
   }, [])

   console.log("category val", categoryValue);
   console.log("dataaaaaaaaaaaaa", data);
   console.log("idddd_final_fianl", categoryid);
   
 
    return(
        <>
        
        <SelectDropdown
         buttonStyle={style}
        data={data.map(item => item.name)}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
        defaultButtonText="Category"
        buttonTextStyle={{fontSize: 25, color:"grey"}}
    
     onSelect={(selectedItem, index) => {
            data.forEach((item)=>{
                if( selectedItem === item.name){
                    setCategoryId(item.id)
                }
               
                
            })
        
            
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
