import {Text, TouchableOpacity, View, ScrollView, TextInput} from "react-native"
import { AddRecipeStyles } from "./AddRecipeStyle"
import { TimeSelect } from "./TimeSelect"
import {useState} from "react"
import { CategorySelect } from "./CategorySelect"
import { IngridientCreateButton } from "./IngridientsCreateButton"
import { IngridientSelect } from "./IngridientSelect"
import { AddPhoto } from "./AddPhoto"
const AddRecipe = () =>{
    const [timeValue, setTimeValue] = useState('')
    const [categoryValue,setCategoryValue] = useState('')
    const [ingValue, setIngValue] = useState('')
    const [description, setTescription] = useState('')
    return(
        <View style={AddRecipeStyles.mainView}>
        <AddPhoto/>
      
        <View style={{marginVertical: 4, width:"auto"}}>
            <TimeSelect  timeValue={timeValue} setTimeValue= {setTimeValue} style={AddRecipeStyles.select}/>
        </View>
        <View>
            <CategorySelect categoryValue = {categoryValue} setCategoryValue={setCategoryValue} style={AddRecipeStyles.select}/>
        </View>
        <View style={{flexDirection: "row",width: "auto", marginVertical: 4}}>
            <IngridientSelect ingValue={ingValue} setIngValue={setIngValue} style={AddRecipeStyles.ingridientSelect}/>
           <IngridientCreateButton style={AddRecipeStyles.createBtn}/> 
        </View>
        <View>
            
        </View>
        <Text  style={{fontSize: 20, color: "gray", fontWeight: "bold"}}>Description</Text>
       <TextInput
        style={AddRecipeStyles.description}
        onChangeText={setTescription}
        value={description}
        
        multiline={true}
        
      />
    
       
        <TouchableOpacity
        style={AddRecipeStyles.btn}
        >
            <Text
            style={AddRecipeStyles.btnText}
            >Save</Text>
        </TouchableOpacity>
        </View>
    )
}

export default AddRecipe