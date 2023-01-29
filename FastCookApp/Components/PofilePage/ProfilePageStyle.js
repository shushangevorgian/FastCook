import {StyleSheet} from "react-native"
import {Colors} from "../Colors.js"
export const ProfileStyles = StyleSheet.create({
    mainView: {
        margin: 5,
    },
    mainBody:{
        margin: 10
    },
    bodyTitle:{
        fontSize: 20,
        fontWeight:"bold",
        color: Colors.gray
    },
    bodyText:{
        alignItems: "flex-start",
        fontSize:16,

    },
    headerVew: {
        margin: 2, 
        justifyContent: "space-between",
        flexDirection: "row",
        //backgroundColor: "red"
    },
    imageButton:{
        width: 60,
        height:60,
        borderRadius: 100,
        backgroundColor: "green",
        margin: 2
    },
    title:{
        fontSize: 22,
        color: Colors.orange,
        textAlign: "center",
        fontWeight:"bold",
        alignSelf: "center",
},
logOutBtn: {
    justifyContent:"center",
    textAlign:"center",
    textAlign: "center"
    
},
logOutBtnText: {
    textAlign: "center",

},
addRecipeView: {
    alignSelf: "flex-start",
    marginTop: 10,
    flexDirection: "row"
},
addTitle:{
    fontSize: 22,
    color:Colors.lightGray,

},
addIcon:{
    paddingLeft: 15
}

})