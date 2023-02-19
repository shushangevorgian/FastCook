import { StyleSheet } from "react-native";
import { Colors } from "../Colors";

export const CreatIngStyle = StyleSheet.create({
    container:{
        flex: 1,
        opacity: 0.8,
        backgroundColor: Colors.white,
        justifyContent: "center",
        alignContent: "center"
        
    },
    textinput:{
        color: "white",
        fontSize: 20,
    },
    title:{
        color:Colors.orange,
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: "center"
    },
    btn:{
        margin: 5,
        borderRadius: 30,
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
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: "center",
        alignSelf: "center"
    }
    
})