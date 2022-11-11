import { StyleSheet } from "react-native";
import { Colors } from "../Colors";
export const Styles  = StyleSheet.create({
    backgroundImage: {
        flex:1,
        opacity: 1,
        backgroundColor: Colors.white

    },
    title1:{
        fontSize: 38,
        fontStyle: "normal",
        textAlign: "center",
       fontWeight: "bold",
       color: Colors.orange,
    },
    title2:{
        fontSize: 35,
        fontStyle: "normal",
        textAlign: "center",
        fontWeight: "230",
        color: Colors.white
    },
    titleView:{
        marginTop: 90,
        
    },
    bodyText:{
        margingTop: 20,
        padding: 10,
        fontSize: 18,
        fontStyle: "normal",
        justifyContent:"center",
        textAlign: "center",
        fontWeight: "150",
        color: Colors.white

    },
    button:{
        height:50,
        width:300,
        alignSelf: "center", 
        borderRadius: 20,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "white",
        marginHorizontal: 80,
        position: 'absolute', 
        bottom:10
},

buttonText:{
    fontSize: 20,
    color: Colors.black,
    textAlign: "center"
}

})