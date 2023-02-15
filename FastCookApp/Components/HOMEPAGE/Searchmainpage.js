import { useState } from "react"
import {View, Text, TextInput, TouchableOpacity,ImageBackground} from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { GetSearchResult } from "../../Redux/Slices/SearchAsyncThunk"
import { Colors } from "../Colors"
import SearchPageResult from "./SearchPageResult"


const MainSearchPage = () =>{
    const [searchValue,setSearchValue] = useState('')
    const {loadingSearch} = useSelector(state=>state.loadingSearch)
    console.log(searchValue, "yehh");
    const dispatch = useDispatch()
    return (
        <>
  
            <View  style={{flexDirection: "row", justifyContent: "space-between",marginTop: 5,margin: 10}}>
                <TextInput
                value={searchValue}
                onChange={value => setSearchValue(value)}
                style={{
                    fontSize: 18,
                    margin: 2,
                     margin:5,
                     color: "#575757",
                     backgroundColor: "#E5E5E5",
                       paddingRight: 180, 
                      borderColor: Colors.boxGrey, 
                      borderWidth: 1, 
                    borderRadius: 10}}
                    placeholder="Find Recipe"
                
                />
                <TouchableOpacity
                onPress={()=>{
                    dispatch(GetSearchResult(searchValue))
                }}
                style={{backgroundColor:"#FABF7B", 
                
                width: 75, 
                height: 40,
                borderRadius: 10, 
                alignSelf: "center",
                justifyContent: "center",
                alignContent: "center",}}
                >
                    <Text
                    style={{ color: "grey",
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                    justifyContent: "center",
                    alignSelf: "center"}}
                    >Search</Text>
                    </TouchableOpacity>    
             </View>


            {/* <SearchPageResult /> */}
           {/* {loadingSearch == true ? <Text style= {{fontSize: 22,margin: 20}}>Loading.......</Text>:null} */}
             </>
        
    )
}

export default MainSearchPage