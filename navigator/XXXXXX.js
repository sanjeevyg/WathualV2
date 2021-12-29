import * as React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import DetailsScreen from '../screens/DetailsScreen'
import ArScreen from '../screens/ArScreen'
import ShopScreen from '../screens/ShopScreen'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faHome, faInfoCircle, faVrCardboard, faCreditCard } from '@fortawesome/free-solid-svg-icons';

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: '#9CADFC',
            inactiveTintColor: '#FFFFFF',
            style: {
              backgroundColor: '#000411',
            }
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarColor: '#276891',
              tabBarIcon: ({ color, size }) => (
                <FontAwesomeIcon icon={ faHome} color={color} size={20} />
              ),
            }}
          />
          <Tab.Screen
            name="Details"
            component={DetailsStackScreen}
            options={{
              tabBarLabel: 'Details',
              tabBarColor: '#276891',
              tabBarIcon: ({ color, size }) => (
                <FontAwesomeIcon icon={ faInfoCircle} color={color} size={20} />
              ),
            
            }}
          />
          <Tab.Screen
            name="Shop"
            component={ShopStackScreen}
            options={{
              tabBarLabel: 'Pay',
              tabBarColor: '#276891',
              tabBarIcon: ({ color, size }) => (
                <FontAwesomeIcon icon={ faCreditCard} color={color} size={20} />
              ),
            }}
          />
          <Tab.Screen
            name="Explore"
            component={ArStackScreen}
            options={{
              tabBarLabel: 'Try It',
              tabBarColor: '#276891',
              tabBarIcon: ({ color, size }) => (
                <FontAwesomeIcon icon={ faVrCardboard} color={color}  size={20} />
              ),
            }}
          />
        </Tab.Navigator>
);


export default MainTabScreen

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ArStack = createStackNavigator();
const ShopStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#276891'
        }, 
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
      <HomeStack.Screen 
      name="Home" 
      component={HomeScreen}
      options={{title: 'Home', headerLeft: () => (
        <FontAwesomeIcon icon={faBars} size={23}    marginLeft={15} backgroundColor='#183059' color= '#fff' onPress={() => navigation.openDrawer()} />
      )}}
      />
    </HomeStack.Navigator>
  )
  
  const DetailsStackScreen = ({navigation}) => (
    <DetailsStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#276891'
        }, 
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
      <DetailsStack.Screen name="Details" component={DetailsScreen} options={{title: 'Watch Specifications'}} />
    </DetailsStack.Navigator>
  )

  const ArStackScreen = ({navigation}) => (
    <ArStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#276891'
        }, 
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
      <ArStack.Screen name="Explore" component={ArScreen} options={{title: 'Augmented Reality'}} />
    </ArStack.Navigator>
  )

  const ShopStackScreen = ({navigation}) => (
    <ShopStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#276891'
        }, 
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
      <ShopStack.Screen name="Shop" component={ShopScreen} />
    </ShopStack.Navigator>
  )



//.......................................

// import 'react-native-gesture-handler';
// import React, {useReducer, useEffect} from 'react'
// import { createDrawerNavigator} from '@react-navigation/drawer';
// import { DrawerContent } from './screens/DrawerContent';
// import {Provider as PaperProvider} from 'react-native-paper';
// import { View, ActivityIndicator } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import ProfileScreen from './screens/ProfileScreen';
// import RootStackScreen from './navigator/RootStackScreen';
// import { AuthContext } from './components/context';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { CustomDarkTheme, CustomDefaultTheme } from './components/darkTheme';
// import HomeScreen from './screens/HomeScreen';
// import DetailsScreen from './screens/DetailsScreen';
// import ShopScreen from './screens/ShopScreen';
// import ArScreen from './screens/ArScreen';
// import MainTabScreen from './navigator/XXXXXX';
// import BottomTabNavigator from './navigator/BottomTabNavigator'
// import MainStackNavigator from './navigator/MainStackNavigator';
// import DrawerNavigator from './navigator/DrawerNavigator';
// import TabDrawer from './navigator/PrivateStackScreen';

// // import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import PrivateStackScreen from './navigator/PrivateStackScreen';
// const Tab = createBottomTabNavigator();

// const Drawer = createDrawerNavigator();

// const App = () => {

//   const[isDarkTheme, setIsDarkTheme] = React.useState(false);

//   const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme; 

//   const authContext = {
//     signIn: async(newToken) => {
//       console.log(newToken)
//       const token = String(newToken)
//       try {
//         await AsyncStorage.setItem('userToken', token);
//       } catch(e) {
//         console.log(e);
//       }
//       console.log('user token: ', token);
//       dispatch({ type: 'LOGIN', token: token });
//     },
//     signOut: async() => {
//       try {
//         await AsyncStorage.removeItem('userToken');
//       } catch(e) {
//         console.log(e);
//       }
//       dispatch({ type: 'LOGOUT' });
//     },
//     signUp: () => {
//     },
//     toggleTheme: () => {
//       setIsDarkTheme( isDarkTheme => !isDarkTheme );
//     }
//   };
 
//   const initialLoginState = {
//     isLoading: true,
//     userToken: null,
//   };

//   const loginReducer = (prevState, action) => {
//     switch( action.type ) {
//       case 'RETRIEVE_TOKEN': 
//         return {
//           ...prevState,
//           userToken: action.token,
//           isLoading: false,
//         };
//       case 'LOGIN': 
//         return {
//           ...prevState,
//           userToken: action.token,
//           isLoading: false,
//         };
//       case 'LOGOUT': 
//         return {
//           ...prevState,
//           userToken: null,
//           isLoading: false,
//         };
//     }
//   };

//   const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

//   useEffect(() => {
//     setTimeout(async() => {
//       let userToken;
//       userToken = null;
//       try {
//         userToken = await AsyncStorage.getItem('userToken');
//       } catch(e) {
//         console.log(e);
//       }
//       dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
//     }, 1000);
//   }, []);

//   if( loginState.isLoading ) {
//     return(
//       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//         <ActivityIndicator size="large"/>
//       </View>
//     );
//   }

//   return (  
//     <PaperProvider theme={theme}>
//       <AuthContext.Provider value={authContext}>
//         <NavigationContainer theme={theme} >
//               {loginState.userToken !== null ? 
              
//               <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
//                     <Drawer.Screen name="Home" component={BottomTabNavigator} />
//                     <Drawer.Screen name="Details" component={DetailsScreen} />
//                     <Drawer.Screen name="Profile" component={BottomTabNavigator} />
//                     <Drawer.Screen name="Explore" component={BottomTabNavigator} />
//                     <Drawer.Screen name="Shop" component={BottomTabNavigator} />
//                     <Drawer.Screen name="MainTab" component={BottomTabNavigator} />
                    
//               </Drawer.Navigator> 
//               // <BottomTabNavigator/>
//               // <PrivateStackScreen/>
//               :
//               <RootStackScreen/>}
//         </NavigationContainer>
//       </AuthContext.Provider>
//     </PaperProvider>
//   );
// }

// export default App;