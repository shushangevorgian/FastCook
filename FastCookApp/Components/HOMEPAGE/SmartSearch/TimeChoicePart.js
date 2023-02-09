import { useEffect } from "react";
import { useState } from "react";
import { Text, View,  } from "react-native";
import { longPressHandlerName } from "react-native-gesture-handler/lib/typescript/handlers/LongPressGestureHandler";
import SelectDropdown from "react-native-select-dropdown";
import StepIndicator from 'react-native-step-indicator';
import { useDispatch, useSelector } from "react-redux";
import { GetTimes } from "../../../Redux/Slices/TimeAsyncThunk";
import { Colors } from "../../Colors";
import Icon from "react-native-vector-icons/AntDesign"
const TimeChoicePart = ({searchTimeValue, setSearchTimeValue, searchTimeId, setSearchTimeId }) =>{
    const {dataTime} = useSelector(state=>state.dataTime)
    const [currentPosition, setCurrentPosition] = useState(1)
    const [labelss, setLabel] = useState('')
    console.log(labelss, "label")
    const labels = ["15m","20m","30m"];
    const dispatch = useDispatch()
    console.log(dataTime, "dataaaaaaaaaa");
    const customStyles = {
                stepIndicatorSize: 30,
                currentStepIndicatorSize:40,
               separatorStrokeWidth: 2,
                currentStepStrokeWidth: 3,
                stepStrokeCurrentColor: '#fe7013',
               stepStrokeWidth: 3,
                stepStrokeFinishedColor: '#fe7013',
                stepStrokeUnFinishedColor: '#aaaaaa',
                separatorFinishedColor: '#fe7013',
                separatorUnFinishedColor: '#aaaaaa',
                stepIndicatorFinishedColor: '#fe7013',
                stepIndicatorUnFinishedColor: '#ffffff',
                stepIndicatorCurrentColor: '#ffffff',
                stepIndicatorLabelFontSize: 20,
                currentStepIndicatorLabelFontSize: 20,
                stepIndicatorLabelCurrentColor: '#fe7013',
                stepIndicatorLabelFinishedColor: '#ffffff',
                stepIndicatorLabelUnFinishedColor: '#aaaaaa',
                labelColor: '#999999',
                labelSize: 20,
                currentStepLabelColor: '#fe7013',
                
              }
        
    useEffect(()=>{
    dispatch(GetTimes())
}, [])
    console.log(searchTimeValue, "current time value" )
    console.log(searchTimeId, "choised id");
    return(

        
            
            <>
                <StepIndicator
                labels={labels}
                customStyles={customStyles}
                currentPosition={currentPosition}
                stepCount= {3}
                onPress={(position) => {
                    console.log(position);
                    setCurrentPosition(position)
                    
                 }}
               
                
                 
            />
        
    <SelectDropdown
     renderDropdownIcon={()=> {
        return (
            <Icon name="down" size={15} color="gray" />
        )
            
        
    }}
        multiselect={true}
        buttonStyle={{ width: "auto",
        height: 40,
        backgroundColor: Colors.boxGrey,
        marginVertical:4
    }}
        data={dataTime.map(item => item.time)}
        defaultButtonText="Time"
        buttonTextStyle={{fontSize: 25, color: "grey"}}

    
        onSelect={(selectedItem, index) => {
            dataTime.forEach((item)=>{
                if( selectedItem === item.time){
                    setSearchTimeId(item.id)
                }
               
                
            })
        
            
        }}

	buttonTextAfterSelection={(selectedItem, index) => {
		 return(
            setSearchTimeValue(selectedItem),
            selectedItem
         )
    }}
	rowTextForSelection={(item, index) => {
	    return item
    }}
    
    />

    </>
    
    )
}
// const TimeChoicePart = () => {
//     const [currentPosition, setCurrentPosition] = useState(1)
//     const [labelss, setLabel] = useState('')
//     console.log(labelss, "label")
//     const labels = ["15m","20m","30m"];
//     const customStyles = {
//         stepIndicatorSize: 30,
//         currentStepIndicatorSize:40,
//        separatorStrokeWidth: 2,
//         currentStepStrokeWidth: 3,
//         stepStrokeCurrentColor: '#fe7013',
//        stepStrokeWidth: 3,
//         stepStrokeFinishedColor: '#fe7013',
//         stepStrokeUnFinishedColor: '#aaaaaa',
//         separatorFinishedColor: '#fe7013',
//         separatorUnFinishedColor: '#aaaaaa',
//         stepIndicatorFinishedColor: '#fe7013',
//         stepIndicatorUnFinishedColor: '#ffffff',
//         stepIndicatorCurrentColor: '#ffffff',
//         stepIndicatorLabelFontSize: 20,
//         currentStepIndicatorLabelFontSize: 20,
//         stepIndicatorLabelCurrentColor: '#fe7013',
//         stepIndicatorLabelFinishedColor: '#ffffff',
//         stepIndicatorLabelUnFinishedColor: '#aaaaaa',
//         labelColor: '#999999',
//         labelSize: 20,
//         currentStepLabelColor: '#fe7013',
        
//       }
//     return(
//         <StepIndicator
//         labels={labels}
//         customStyles={customStyles}
//         currentPosition={currentPosition}
//         stepCount= {3}
//         onPress={(position) => {
//             console.log(position);
//             setCurrentPosition(position)
            
//          }}
       
        
         
//     />
  

 
//     )
    
// }

export default  TimeChoicePart