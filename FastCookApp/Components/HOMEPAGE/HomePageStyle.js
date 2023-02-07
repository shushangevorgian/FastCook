import { StyleSheet } from "react-native";

export const HomePageStyle = StyleSheet.create({
    container:{
        flexDirection: "row",
            //backgroundColor: "red",
            margin:5,
            justifyContent: "space-between",
            paddingHorizontal: 10,
            height: 60,
            alignContent: "center",
            alignItems: "center"
    },
    inputView:{
            flexDirection: "row",
            // justifyContent: "space-between"
            // padding: 15
        
    },
    input:{
     
        fontSize:14,
        borderRadius: 20,
        borderColor: "gray",
        borderWidth: 2,
        width: 270,
        height: 35,
        paddingTop: 10,
        paddingRight: 50,
       
                
    },

    iconSearch:{
        marginRight: 25,
       
    },
  
})