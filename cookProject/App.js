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
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
function Root() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false, }}>
    <Drawer.Screen name="home" component={HomePageFirsPart} />
       <Drawer.Screen name="Login" component={Login} />
       <Drawer.Screen name="SignUp" component={SignUp} />   
    </Drawer.Navigator>
  );
}
const App = () =>{
  return (
    <>
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, }}>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="forgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    
    
    
</>
    
  )
}


export default App