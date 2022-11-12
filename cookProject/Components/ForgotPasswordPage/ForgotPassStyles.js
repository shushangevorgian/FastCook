import { StyleSheet } from "react-native";
import { Colors } from "../Colors";
export const ForgotPassStyles = StyleSheet.create({
    backgroundView:{
        flex:1,
        backgroundColor:Colors.white,
        alignContent:"center",
        
    },
    title:{
        fontSize: 38,
        color: Colors.LightSalmon,
        textAlign: "center",
        fontWeight:"bold"
    },
    textsView:{
        justifyContent: "center",
        alignContent:"center",
        marginTop: 110,
        marginHorizontal: 50
    },
    infoText:{
        textAlign: "center",
        fontSize: 18,
        color: Colors.lightGray
    },
    inputView:{
        margin: 15,
        backgroundColor: Colors.gray,
        borderBottomColor: Colors.borderColor,
        marginTop: 10
    },
    btn:{
        height:35,
        width: 120,
        backgroundColor: Colors.orange,
        alignSelf: "center",
        borderRadius: 30,
        justifyContent: "center"
    },
    btnText:{
        fontSize: 20,
        textAlign: "center",
        justifyContent:"center",
        alignContent: "center",
        color: Colors.white
    },
    btnImageView:{
        alignContent: "flex-end",
        margin:5,
        height:80,
        width: "100%"
    },
    btnImageView:{
        margin:5,
        width: 500,
        height:300
    },
    btnImage:{
        //alignContent:"center",
        width: 400,
        height:300
    }
})