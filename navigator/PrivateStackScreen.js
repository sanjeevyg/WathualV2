import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DetailsScreen from '../screens/DetailsScreen';
import BottomTabNavigator from './BottomTabNavigator';
import DrawerNavigator from './DrawerNavigator';

const RootStack = createStackNavigator();

const PrivateStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        {/* <RootStack.Screen name="Tab" component={BottomTabNavigator}/> */}
        <RootStack.Screen name="DrawerNavigator" component={DrawerNavigator}/>
        <RootStack.Screen  name="Details" component={DetailsScreen}/>
    </RootStack.Navigator>
)


export default PrivateStackScreen