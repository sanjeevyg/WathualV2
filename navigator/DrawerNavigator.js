import React from 'react'
import { createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import { DrawerContent } from '../screens/DrawerContent';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ShopScreen from '../screens/ShopScreen';
import ArScreen from '../screens/ArScreen';
import ProfileScreen from '../screens/ProfileScreen';
// import MainTabScreen from './navigator/XXXXXX';



const Drawer = createDrawerNavigator();


export default function DrawerNavigator() {
    return (
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
              {/* <Drawer.Screen name="Details" component={DetailsScreen}/> */}
              <Drawer.Screen name="test" component={BottomTabNavigator}/>
          </Drawer.Navigator> 
    )
}
