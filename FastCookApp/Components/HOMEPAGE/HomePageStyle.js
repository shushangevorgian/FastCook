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
            padding: 15
        
    },
    input:{
        borderRadius: 20,
        borderColor: "gray",
        borderWidth: 2,
        width: 270,
        height: 35,
                
    },

    iconSearch:{
        margin: 4,
    },
    iconFillter:{
        margin: 5
    }
})