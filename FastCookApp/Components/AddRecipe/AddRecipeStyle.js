import { StyleSheet } from "react-native";
import {Colors} from '../Colors'
export const AddRecipeStyles = StyleSheet.create({
    mainView:{
        flex: 1,
        margin: 5,
        
    },
    addPhotoBtn:{
        margin: 10,
        alignSelf: "flex-start",
        borderRadius: 5,
        width: 250,
        height: 180,
        backgroundColor: Colors.boxGrey
    },
    addphotoText:{
        fontSize: 20
    },
    select:{
        width: "auto",
        height: 40,
        backgroundColor: Colors.boxGrey
    },
    ingridientSelect:{
        marginLeft: 0,
        width: 358,
        height: 40,
        backgroundColor: Colors.boxGrey
    },
    createBtn:{
        
        marginRight:0,
        backgroundColor: Colors.boxGrey
    },
    description:{
        margin:5,
        alignItems: "baseline",
        // alignContent:"flex-start",
        height: 150,
        borderColor: "black", 
        backgroundColor: Colors.boxGrey
    },
    btn:{
        margin: 5,
        backgroundColor: Colors.orange,
        borderRadius: 5,
        width: 300,
        height: 48,
        alignSelf: "center",
        justifyContent: "center",
        alignContent: "center",
    },
    btnText:{
        color: "grey",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: "center",
        alignSelf: "center"
    }
    
})