import { StyleSheet } from "react-native";
import { Colors } from "../Colors";
export const ConfirmStyles = StyleSheet.create({
    container:{

        backgroundColor: Colors.gray,
        flex: 1,
        alignContent: "center",
    

    
    },
    imageView: {
        margin: 90,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
    titleText:{
        fontSize: 28,
        fontWeight: "bold",
        color: Colors.lightGray,
        textAlign: "center"
    },
    
    input:{
        margin: 10,
        alignSelf: "center",
        height: 40,
        width:300,
        backgroundColor: Colors.gray,
        borderBottomColor: Colors.borderColor,
        borderBottomWidth: 1.5,
        fontSize: 18,
        textAlign: "center"
    },
    btnView:{
        margin: 20,
        backgroundColor: Colors.LightSalmon,
        borderRadius: 30,
        width: 300,
        height: 48,
        alignSelf: "center",
        justifyContent: "center",
        alignContent: "center",
    },
    btnText:{
        color: Colors.white,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: "center",
        alignSelf: "center"
    },

    createContainer:{
        marginTop: 100,
        margin: 30,
        height: 300,
        
    },
    inputsView:{
        margin:10
    },
    titleText:{
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold"

    }
    
})