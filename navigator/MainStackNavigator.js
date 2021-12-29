import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faHome, faInfoCircle, faVrCardboard, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import HomeScreen from '../screens/HomeScreen';
import ShopScreen from '../screens/ShopScreen';
import ArScreen from '../screens/ArScreen';
import ProfileStackScreen from '../screens/ProfileScreen';


const HomeStack = createStackNavigator();
const ArStack = createStackNavigator();
const ShopStack = createStackNavigator();
const ProfileStack = createStackNavigator();

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

  export { HomeStackScreen, ArStackScreen, ShopStackScreen, ProfileStackScreen };