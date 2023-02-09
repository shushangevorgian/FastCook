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
        fontSize: 32,
        // alignSelf: "flex-start"
    },
    imageComponent:{
        marginLeft: 10,
        // marginLeft: 20,
        // marginVertical: 50,
        borderRadius: 30,
        margin: 3,    
        // height: 120,
        // width:300,
    },
    
    bodyText:{
        marginVertical: 10,
        marginHorizontal: 5,
        fontSize: 20,
        color: "grey",
        justifyContent: "flex-start",
        alignContent: "flex-start",
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