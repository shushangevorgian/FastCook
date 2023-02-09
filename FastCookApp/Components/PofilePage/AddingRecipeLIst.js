//////UDER PLUS
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Colors } from "../Colors"

 export const AddingRecipeLIst = () => {
    return (
        <View style={{margin: 2, flexDirection: "row",width: "auto", backgroundColor: Colors.boxGrey, height: 170, borderColor: "gray", borderWidth: 0.5, borderRadius: 5}}>
            <View
            style={{
                    height:170,width:190
        }}

            >
                <Text>Left part</Text>
            </View>
            <View
             style={{
             height:150,width:480
            }}
            >
                
                <Text>Recipe name</Text>
                <Text>description....</Text>
                <View
                style={{flexDirection:"row",marginTop: 60}}
                >
                    <TouchableOpacity
                    style={{margin: 5,
                    borderRadius: 5,
                    backgroundColor: "orange",
                    alignItems: "center",
                    alignContent: "center",
                    paddingVertical: 6,
                    paddingHorizontal: 15,
                    justifyContent: "center"
                    }}
                    
                    >
                        <Text
                        style={{fontSize: 15,color: "white"}}
                        >DELETE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={{
                    borderRadius: 5,
                    backgroundColor: "orange",
                    margin: 5,
                    paddingVertical: 6,
                    paddingHorizontal: 15,
                    alignItems: "center",
                    alignContent: "center",
                    justifyContent: "center"}}
                    >
                        <Text
                        style={{fontSize: 15, color: "white"}}
                        >UPDATE</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}