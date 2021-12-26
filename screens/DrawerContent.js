import React, {useContext} from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faAlignJustify, faIndent, faSignOutAlt, faEye, faHome, faInfoCircle, faUserCircle, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { useTheme, Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { AuthContext } from '../components/context';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import RootStackScreen from './RootStackScreen';
import SplashScreen from './SplashScreen';

export function DrawerContent(props) {

    let pic = {uri: "https://static.wikia.nocookie.net/civilization/images/5/53/Genghis_Khan_%28Civ6%29.png/revision/latest/top-crop/width/360/height/360?cb=20200930125057"}

    const paperTheme = useTheme()
    const {signOut, toggleTheme} = React.useContext(AuthContext);

    const handleSignOut = () => {
      signOut()
    }

    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView { ... props}>
                <View style={styles.DrawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image
                                source={pic}
                                size={55}
                            />
                        </View>
                        <View style={{flexDirection: 'column'}}>
                            <Title style={styles.title}>Genghis Khan</Title>
                            <Caption style={styles.caption}>@kgenhis</Caption>
                        </View>
                    </View>
                </View>
                <Drawer.Section style={styles.drawerSection}>

                    <DrawerItem 
                            icon= {({ color, size }) => (
                            <FontAwesomeIcon icon={ faUserCircle} color={color} size={20} />
                        )}
                        label="Profile"
                        onPress={() => {props.navigation.navigate('Profile')}}
                    />
                    <DrawerItem 
                            icon= {({ color, size }) => (
                            <FontAwesomeIcon icon={ faIndent} color={color} size={20} />
                        )}
                        label="Preferences"
                        onPress={() => {}}
                    />  
                    <DrawerItem 
                            icon= {({ color, size }) => (
                            <FontAwesomeIcon icon={ faUserCog} color= '#5D576B' size={20} />
                        )}
                        label="Settings"
                        onPress={() => {}}
                    />
                </Drawer.Section>

                <Drawer.Section title="Theme">
                    <TouchableRipple onPress={() => {toggleTheme()}}>
                        <View style={styles.theme}>
                            <Text>Dark Theme</Text>
                            <View pointerEvents="none">
                                <Switch value={paperTheme.dark}/>
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>

            </DrawerContentScrollView>
            <Drawer.Section>
                <DrawerItem 
                    icon= {({ color, size }) => (
                    <FontAwesomeIcon icon={ faSignOutAlt} color={color} size={20} />
                      )}
                    label="Sign Out"
                    onPress={handleSignOut}
                />
            </Drawer.Section>
        </View>
    )
}


const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      marginTop: 20,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    theme: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
    