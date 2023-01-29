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
import Ionicons from 'react-native-vector-icons/Ionicons'
import ConfirmPass from './Components/ForgotPasswordPage/ConfirmPass';
import LoggedInHomePage from './Components/HOMEPAGE/HomePageLoggedIn';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreateNewPass from './Components/ForgotPasswordPage/CreateNewPass';
import SavePage from './Components/SavePage/Save';
import Profile from './Components/PofilePage/Profile';
import AddRecipe from "./Components/AddRecipe/AddRecipe.js";
import VerifyCode from './Components/SignUpPage/VerifyCode.';
const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: { position: 'absolute',
                      margin: 5,
                      justifyContent: "space-between",
      },
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'HOME') {
          iconName = focused
            //'<ion-icon name="home-outline"></ion-icon>'
            //<ion-icon name="person-outline"></ion-icon>
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'SAVE') {
          iconName = focused ? 'ios-list' : 'ios-list-outline';
        }
        else{
          iconName = focused ? 'ios-list' : 'ios-list-outline';
        }



        
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
   
    >
      <Tab.Screen name="HOME" component={LoggedInHomePage}  />
      <Tab.Screen name="SAVE" component={SavePage} />
      <Tab.Screen name="PROFILE" component={Profile} />
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
        <Stack.Screen name='addRecipe' component={AddRecipe} />
        <Stack.Screen name='verifyCode' component={VerifyCode} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    
    
    
</>
    
  )
}


export default App