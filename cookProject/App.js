import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer  } from '@react-navigation/native';
import HomePageFirsPart from './Components/HOMEPAGE/HomePageFirsPart';
import Login from './Components/LoginPage/LoginPage.js';
import SignUp from './Components/SignUpPage/SignUpPage';
import ForgotPassword from './Components/ForgotPasswordPage/ForgotPassPage';
import { Provider } from 'react-redux';
import { store } from './Redux/Slices/Store';
import Icon from "react-native-vector-icons/MaterialIcons"
import ConfirmPass from './Components/ForgotPasswordPage/ConfirmPass';
import LoggedInHomePage from './Components/HOMEPAGE/HomePageLoggedIn';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreateNewPass from './Components/ForgotPasswordPage/CreateNewPass';

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={{
    headerShown: false,
      tabBarStyle: { position: 'absolute',
                      margin: 10,
                      justifyContent: "space-between",
      },
    }}>
      <Tab.Screen name="Home" component={LoggedInHomePage} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}
function DrawerNav() {
  return (
    <>
    
    <Drawer.Navigator screenOptions={{headerShown: false }}  >
    
    <Drawer.Screen name="home" component={HomePageFirsPart} />
       <Drawer.Screen name="Login" component={Login} />
       <Drawer.Screen name="SignUp" component={SignUp} />   
    </Drawer.Navigator>
    </>
  );
}
const App = () =>{
  return (
    <>
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, }}>
        <Stack.Screen
          name="DrawerNav"
          component={DrawerNav}
          options={{ headerShown: false,}}

        />
        <Stack.Screen name="forgotPassword" component={ForgotPassword} />
        <Stack.Screen name="confirmPass" component={ConfirmPass} />
        <Stack.Screen name="loggedInHomePage" component={MyTabs}/>
        <Stack.Screen  name= "createNewPass"  component= {CreateNewPass}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    
    
    
</>
    
  )
}


export default App