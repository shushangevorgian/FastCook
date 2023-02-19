import { useEffect, useState } from "react"
import {Touchable, View,Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import SelectDropdown from 'react-native-select-dropdown'
import { useDispatch, useSelector } from "react-redux"
import { GetIngridient } from "../../Redux/Slices/GetIngridientsAsynckThunck"
import { MultipleSelectList } from 'react-native-dropdown-select-list'
import { Colors } from "../Colors"
export const IngridientSelect = ({ingValue, setIngValue, style, ingridientId, setIngridientId}) =>{
    const {getIngrigient} = useSelector(state=>state.getIngrigient)
    const ids = []
    const dispatch = useDispatch()
        useEffect(()=>{
            dispatch(GetIngridient())
   }, [])
   console.log("ingridientssssssss" ,getIngrigient)
    console.log("ingVal", ingValue);
     console.log("choseId===========", ingridientId)
   
   
 
    return(
        <>
       
         <View  style={{flex: 1, paddingHorizontal: 20,   marginLeft: 0, backgroundColor: Colors.boxGrey}} > 
    <MultipleSelectList 
    label="Ingredient"
    
    boxStyles={{backgroundColor: Colors.boxGrey, borderColor: Colors.boxGrey, borderRadius:0, marginVertical: 4 }}
    data={getIngrigient.map(item => item.name)}
    //defaultButtonText="Ingridient"
    //buttonTextStyle={{fontSize: 25, color: "grey"}}
    
    
	setSelected={(selectedItem, index) => {
  
        setIngValue(selectedItem)
        
    }}
    onSelect={()=>{
        ingValue.map((item)=>{
            console.log("name", item);
            getIngrigient.map((ing)=>{
                if(item === ing.name){
                    
                    // ids.push(ing.id)
                    console.log("yes" ,ing.id);
                    // console.log("ids", ids);
                    setIngridientId(ing.id)
                }
            })
        })
        
    }}
    />
</View>
    </>
    )
}
