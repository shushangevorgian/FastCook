import {Text, TouchableOpacity, View, ScrollView, TextInput} from "react-native"
import { AddRecipeStyles } from "./AddRecipeStyle"
import { TimeSelect } from "./TimeSelect"
import {useState} from "react"
import { CategorySelect } from "./CategorySelect"
import { IngridientCreateButton } from "./IngridientsCreateButton"
import { IngridientSelect } from "./IngridientSelect"
import { AddPhoto } from "./AddPhoto"
import { useDispatch } from "react-redux"
import { CreateNewRecipe } from "../../Redux/Slices/CreateNewRecipeAsyncThunck"
import { useNavigation } from "@react-navigation/native"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const AddRecipe = () =>{
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [image, setImage] = useState("");
    const [timeValue, setTimeValue] = useState('')
    const [categoryValue,setCategoryValue] = useState('')
    const [ingValue, setIngValue] = useState([])
    const [description, setTescription] = useState('')
    const [error, setError] = useState({field: '', message: ''})
    const [categoryid, setCategoryId] = useState('')
    const [timeId, setTimeId] = useState('')
    const [ingridientId, setIngridientId] = useState([])

    const onPress = () =>{
        const loginError = {field: '', message: ''}
        if (timeValue === ''){
            loginError.field = "timeValue";
            loginError.message = 'this field is required'
            setError(loginError)
        }
        else if (categoryValue === ''){
            loginError.field = "categoryValue";
            loginError.message = "this field is required"
            setError(loginError)
        }
        else if(ingValue === '') {
            loginError.field = "ingValue";
            loginError.message = "this field is required"
            setError(loginError)
        }else if (description === ''){
            loginError.field = "description";
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
            dispatch(CreateNewRecipe({categoryValue, categoryid, timeId, ingridientId, description, image}))
        }
    }
    return(
        <KeyboardAwareScrollView>
        <View style={AddRecipeStyles.mainView}>
        <AddPhoto image={image} setImage={setImage}/>
      
        <View style={{marginVertical: 4, width:"auto"}}>
            <TimeSelect 
            timeId={timeId}
            setTimeId={setTimeId}
             timeValue={timeValue} setTimeValue= {setTimeValue} style={AddRecipeStyles.select}/>
        </View>
        {error.field === "timeValue" && (
            <Text style={{fontSize: 16, color: "red"}}>{error.message}</Text>
        )}
        <View>
            <CategorySelect
            categoryid={categoryid}
            setCategoryId={setCategoryId}
             categoryValue = {categoryValue} setCategoryValue={setCategoryValue} style={AddRecipeStyles.select}/>
        </View>
        {error.field === "categoryValue" && (
            <Text style={{fontSize: 16, color: "red"}}>{error.message}</Text>
        )}
        <View style={{flexDirection: "row", marginVertical: 4}}>
            <IngridientSelect 
            ingridientId={ingridientId}
            setIngridientId={setIngridientId}
            ingValue={ingValue} 
            setIngValue={setIngValue} 
            
            />
           <IngridientCreateButton style={AddRecipeStyles.createBtn}/> 
        </View>
        {error.field === "ingValue" && (
            <Text style={{fontSize: 16, color: "red"}}>{error.message}</Text>
        )}
        <View>
            
        </View>

        <Text  style={{fontSize: 20, color: "gray", fontWeight: "bold"}}>Description</Text>
       <TextInput
        style={AddRecipeStyles.description}
        onChangeText={setTescription}
        value={description}
        
        multiline={true}

        
      />
    {error.field === "description" && (
            <Text style={{fontSize: 16, color: "red"}}>{error.message}</Text>
        )}
       
        <TouchableOpacity
        style={AddRecipeStyles.btn}
        onPress={() => {onPress()}}
        // onPress={() => {
        //     //navigation.navigate('verificationpage')
        // }}
        >
            <Text
            style={AddRecipeStyles.btnText}
            >Create</Text>
        </TouchableOpacity>
        </View>
        </KeyboardAwareScrollView>
    )
}

export default AddRecipe