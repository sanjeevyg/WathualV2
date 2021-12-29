import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackScreen, ArStackScreen, ShopStackScreen, ProfileStackScreen } from './MainStackNavigator'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faVrCardboard, faCreditCard,faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        "tabBarActiveTintColor": "white",
        "tabBarShowLabel": false,
        "tabBarStyle": [
          {
            "display": "flex",
            "backgroundColor": "#276891",
            "height": 90,
           
          }, null]
       }
      }
    >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        headerShown: false,
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon icon={ faHome} color={color} size={25} />
        ),
      }}
    />

    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        headerShown: false,
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon icon={ faUserCircle} color={color} size={25} />
        ),
      }}
    />

    <Tab.Screen
      name="Shop"
      component={ShopStackScreen}
      options={{
        headerShown: false,
        tabBarLabel: 'Pay',
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon icon={ faCreditCard} color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ArStackScreen}
      options={{
        headerShown: false,
        tabBarLabel: 'Try It',
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon icon={ faVrCardboard} color={color}  size={25} />
        ),
      }}
    />
  </Tab.Navigator>
)}

