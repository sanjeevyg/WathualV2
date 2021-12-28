import 'react-native-gesture-handler';
import React, {useReducer, useEffect} from 'react'
import { createDrawerNavigator} from '@react-navigation/drawer';
import { DrawerContent } from './screens/DrawerContent';
import {Provider as PaperProvider} from 'react-native-paper';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from './screens/ProfileScreen';
import RootStackScreen from './navigator/RootStackScreen';
import { AuthContext } from './components/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CustomDarkTheme, CustomDefaultTheme } from './components/darkTheme';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ShopScreen from './screens/ShopScreen';
import ArScreen from './screens/ArScreen';
import MainTabScreen from './navigator/XXXXXX';
import BottomTabNavigator from './navigator/BottomTabNavigator'
import MainStackNavigator from './navigator/MainStackNavigator';
import DrawerNavigator from './navigator/DrawerNavigator';
import TabDrawer from './navigator/PrivateStackScreen';

// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PrivateStackScreen from './navigator/PrivateStackScreen';
const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const App = () => {

  const[isDarkTheme, setIsDarkTheme] = React.useState(false);

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme; 

  const authContext = {
    signIn: async(newToken) => {
      console.log(newToken)
      const token = String(newToken)
      try {
        await AsyncStorage.setItem('userToken', token);
      } catch(e) {
        console.log(e);
      }
      console.log('user token: ', token);
      dispatch({ type: 'LOGIN', token: token });
    },
    signOut: async() => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
    },
    toggleTheme: () => {
      setIsDarkTheme( isDarkTheme => !isDarkTheme );
    }
  };
 
  const initialLoginState = {
    isLoading: true,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userToken: null,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  useEffect(() => {
    setTimeout(async() => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if( loginState.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  return (  
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme} >
              {loginState.userToken !== null ? 
              
              <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
                    <Drawer.Screen name="Home" component={BottomTabNavigator} />
                    <Drawer.Screen name="Details" component={DetailsScreen} />
                    <Drawer.Screen name="Profile" component={BottomTabNavigator} />
                    <Drawer.Screen name="Explore" component={BottomTabNavigator} />
                    <Drawer.Screen name="Shop" component={BottomTabNavigator} />
                    <Drawer.Screen name="MainTab" component={BottomTabNavigator} />
                    
              </Drawer.Navigator> 
              // <BottomTabNavigator/>
              // <PrivateStackScreen/>
              :
              <RootStackScreen/>}
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
}

export default App;