import 'react-native-gesture-handler';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePageFirsPart from './Components/HOMEPAGE/HomePageFirsPart';
import SideBar from './Components/SideBar';
import Stacks from './Components/Stack';
import Login from './Components/LoginPage';
import SignIn from './Components/SignInPage';
const Drawer = createDrawerNavigator();
//const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer independent={true}>
        <Drawer.Navigator>
          <Drawer.Screen name="home" component={HomePageFirsPart} />
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="SignIn" component={SignIn} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
