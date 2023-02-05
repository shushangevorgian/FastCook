import {Text, View} from 'react-native';
import { Colors } from '../Colors';
import HeaderPart from './HeaderPart';
import SearchPart from './SearchPart';
import ShowPicktures from './ShowPicktures';
const LoggedInHomePage = () => {
  return (
    <View
    style={{backgroundColor: Colors.backgroundGrey}}
    >
      <HeaderPart />
      <Text style={{fontSize: 20, fontWeight: "bold", color: Colors.gray}}>What do you whant to cook today?</Text>
     
      <SearchPart />

    
      
      <ShowPicktures />
   
    

    </View>
  );
};

export default LoggedInHomePage;
