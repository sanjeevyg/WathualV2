import * as React from 'react';
import { View, Text, Button } from 'react-native';



const PreferencesScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , color: '#2EC4B6'}} >
        <Text>Preferences</Text> 
        <Button
            title="Preferences"
            onPress={() => navigation.navigate('Shop')}
        />
      </View>
    );
  }

  export default PreferencesScreen