import React from 'react'
import { createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import { DrawerContent } from '../screens/DrawerContent';
import { HomeStackScreen } from './MainStackNavigator';
import ProfileStackScreen from '../screens/ProfileScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
              <Drawer.Screen name="BottomTab" options={{headerShown: false}} component={BottomTabNavigator}/>
              <Drawer.Screen name="Profile" options={{headerShown: false}} component={ProfileStackScreen}/>
              <Drawer.Screen name="Details" options={{headerShown: false}} component={DetailsScreen}/>
          </Drawer.Navigator> 
    )
}
