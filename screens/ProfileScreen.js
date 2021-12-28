import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const Tab = createMaterialBottomTabNavigator();


// function ProfileTab() {
//   return (
//     <Tab.Navigator
//       // initialRouteName="Feed"
//       activeColor="#fff"
//       style={{ backgroundColor: '#fff' }}
//     >
//       <Tab.Screen
//         name="Feed"
//         component={ProfileStackScreen}
//       />
//     </Tab.Navigator>
//   );
// }


const ProfileScreen = ({navigation, route}) => {
  console.log(route)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}} >
        <Text>Profile Screen</Text> 
        <Button
            title="Explore"
            onPress={() => navigation.navigate('Explore')}
        />
      </View>
    );
  }


// const ProfileStack = createStackNavigator();
// const ProfileStackScreen = () => (
//     <ProfileStack.Navigator screenOptions={{
//         headerStyle: {
//           backgroundColor: '#276891'
//         }, 
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold'
//         }, 
//         footerStyle: {
//           backgroundColor: '#276891'
//         }, 
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold'
//         }
//       }}>
//       <ProfileStack.Screen name="Profile" component={ProfileScreen} />
//     </ProfileStack.Navigator>
//   )

  export default ProfileScreen