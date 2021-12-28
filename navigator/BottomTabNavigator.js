import * as React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeStackScreen, ArStackScreen, ShopStackScreen } from './MainStackNavigator'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faVrCardboard, faCreditCard } from '@fortawesome/free-solid-svg-icons';


const Tab = createMaterialBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
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
)}
