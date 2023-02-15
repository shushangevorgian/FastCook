import { StyleSheet } from "react-native";
import { Colors } from "../Colors";

export const StlesSignUp = StyleSheet.create({
    backgroundImage:{
        flex: 1,
        opacity: 0.9,
        backgroundColor: Colors.white,
        justifyContent: "center",
        alignContent: "center"
    },
    formikView:{
        backgroundColor: Colors.white,
        height: 600,
        width: 350,
        alignSelf: "center",
        borderRadius: 40,
        alignContent: "center",
    

    
    },
    logo:{
        marginTop: 1,
        alignSelf: "center",
        justifyContent:"center",
        marginTop: 10,
        marginBottom: 15,
        color: Colors.orange

    },
    title:{
        color: Colors.LightSalmon,
        fontSize: 35,
        textAlign:"center",
        fontWeight: "bold"

    },
    texts:{
        textAlign: "center",
        color: Colors.lightGray,
        fontSize: 16
    },
    button:{
        //marginTop:20,
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
    inputView:{
        backgroundColor: Colors.gray,
        borderBottomColor: Colors.borderColor,
        margin: 8
    },
    textView:{
        margin:2,
        flexDirection:"row",
        justifyContent: "center"
    },
    StlesSignUp:{
        fontSize: 18,
        color: Colors.LightSalmon
    },
    textInput:{
        fontSize: 18,
        color: '#575757 '
    }
})