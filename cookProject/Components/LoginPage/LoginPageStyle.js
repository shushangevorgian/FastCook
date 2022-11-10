import { StyleSheet } from "react-native";
import { Colors } from "../Colors";

export const StylesLogin = StyleSheet.create({
    backgroundImage: {
        flex:1,
        backgroundColor: Colors.black

    },
    title:{
        color: Colors.titleColor,
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        alignItems: "center",
        alignContent: "center"
         
    },
    FormikView:{

        marginTop: 100,
        justifyContent: "center",
        alignSelf: "baseline",
        alignContent: "center",
        alignSelf:"center",
        margin: 10

    },
    inputField:{
        height: 40,
        width:300,
        backgroundColor: Colors.gray,
        borderBottomColor: Colors.borderColor,
        borderBottomWidth: 1.5,
        fontSize: 18
        // margin: 12,
    },
    button:{
        marginTop:20,
        backgroundColor: Colors.white,
        borderRadius: 30,
        width: 300,
        height: 48,
        alignSelf: "center",
        justifyContent: "center",
        alignContent: "center",
    },
    btnText:{
        color: Colors.orange,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: "center",
        alignSelf: "center"

    },
    textView:{
        flexDirection:"row",
        justifyContent: "center"
    },
    textComponentView:{
        marginTop: 10,
        justifyContent:"space-between",
    },
    linkTexts:{
        fontSize: 18,
        color: Colors.white,
    },
    miniText:{
        fontSize: 18,
        color: Colors.orange,
    }
    

})