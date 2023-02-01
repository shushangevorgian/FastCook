import { StyleSheet } from "react-native"
import {Colors} from "../../Colors"
 export const eachPicture = StyleSheet.create({
    mainContainer:{
        flex: 1,
    },
    titleView:{
        margin: 5,
        justifyContent: "center",
    
    },
    titleText:{
        color: "grey",
        fontSize: 28,
        alignSelf: "flex-start"
    },
    imageComponent:{
        marginLeft: 20,
        marginVertical: 10,
        borderRadius: 30,
        margin: 3,    
        height: 200,
        width:600,
    },
    
    bodyText:{
        marginVertical: 10,
        marginHorizontal: 5,
        fontSize: 16,
        color: "grey",
        justifyContent: "flex-start",
        alignContent: "flex-start",
    }

}) 