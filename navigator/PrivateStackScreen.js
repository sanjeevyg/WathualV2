import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DetailsScreen from '../screens/DetailsScreen';
import ProfileScreen from './BottomTabNavigator';
import DrawerNavigator from './DrawerNavigator';
import BottomTabNavigator from './BottomTabNavigator';

const RootStack = createStackNavigator();

const PrivateStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="Profile" component={ProfileScreen}/>
        <RootStack.Screen  name="Details" component={DetailsScreen}/>
        <RootStack.Screen  name="Tab" component={BottomTabNavigator}/>
        <RootStack.Screen  name="DrawerTab" component={DrawerNavigator}/>
    </RootStack.Navigator>
)


export default PrivateStackScreen