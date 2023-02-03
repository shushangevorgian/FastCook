import { StyleSheet } from "react-native"
import {Colors} from "../../Colors"
 export const eachPicture = StyleSheet.create({
    mainContainer:{
        flex: 1,
        alignContent: "center"
    
    },
    titleView:{
        margin: 5,
        justifyContent: "center",
    
    },
    titleText:{
        color: "grey",
        fontSize: 28,
        // alignSelf: "flex-start"
    },
    imageComponent:{
        marginLeft: 20,
        marginVertical: 50,
        borderRadius: 30,
        margin: 3,    
        // height: 120,
        // width:300,
    },
    
    bodyText:{
        marginVertical: 50,
        marginHorizontal: 5,
        fontSize: 16,
        color: "grey",
        justifyContent: "flex-start",
        alignContent: "flex-start",
    }

}) 