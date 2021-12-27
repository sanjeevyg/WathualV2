import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {CheckCircle } from "react-native-feather";


const baseURL = "http://localhost:3000"

const ShopScreen = ({navigation}) => {

    const [userInfo, setUserInfo] = React.useState({
      name: '',
      email: '',
      username:'',
      password:'',
      confirm_password: '',
      nameInputStatus: false,
      userNameInputStatus: false,
      emailInputStatus: false,
      secureTextEntry: true,
      secureTextEntryConfirm: true
    })

    const handleUsernameChange = (val) => {
      if (val.length > 0) {
        setUserInfo({
          ...userInfo,
          username: val,
          userNameInputStatus: true
         })
      } else {
        setUserInfo({
          ...userInfo,
          usernname: val,
          userNameInputStatus: false
         })
      }
    }

    const handleNameChange = (val) => {
      if (val.length > 0) {
        setUserInfo({
          ...userInfo,
          name: val,
          nameInputStatus: true
         })
      } else {
        setUserInfo({
          ...userInfo,
          name: val,
          nameInputStatus: false
         })
      }
    }

    const handleEmailChange = (val) => {
      if (val.length > 0) {
        setUserInfo({
          ...userInfo,
          email: val,
          emailInputStatus: true
         })
      } else {
        setUserInfo({
          ...userInfo,
          email: val,
          emailInputStatus: false
         })
      }
    }

    const handlePasswordChange = (val) => {
      setUserInfo({
        ...userInfo,
        password: val
      })
    }

    const confirmNewPassword = (val) => {
      setUserInfo({
        ...userInfo,
        confirm_password: val
      })
    }

    const handleSecureTextEntry = (val) => {
      setUserInfo({
        ...userInfo,
        secureTextEntry: !userInfo.secureTextEntry
      })
    }

    const handleSecureTextEntryPasswordUpdate = (val) => {
      setUserInfo({
        ...userInfo,
        secureTextEntryConfirm: !userInfo.secureTextEntryConfirm
      })
    }

    const newUser = {
      name: userInfo.name,
      email: userInfo.email,
      password: userInfo.password,
      username: userInfo.username
    }

    const createUser = () => {
      if (userInfo.password === userInfo.confirm_password) {
        fetch(`${baseURL}/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({user: newUser})
        }).then(response => response.json())
          .then(console.log)
      } 
    }
  
    return (
      <View style={styles.container} >
        <View style={styles.header}>
            <Text style={styles.text_header}>VISA</Text>
        </View>
        <View style={styles.footer}>

            <Text style={styles.text_footer}>CARD NUMBER               CVC</Text>
            <View styles={styles.card}>
                  <View style={styles.username}>
                    <TextInput placeholder="Card Number" style={styles.textInput} onChangeText={(val)=>handleNameChange(val)} autoCapitalize='none'/>
                    <TextInput placeholder="253" style={styles.textInput} onChangeText={(val)=>handleNameChange(val)} autoCapitalize='none'/>
                    {userInfo.nameInputStatus ? <CheckCircle stroke="#276891" fill="#fff" width={19} height={19} /> : null}
                  </View>
                 
            </View> 

            <View>
              <Text style={styles.text_footer}>CARD HOLDER NAME</Text>
              <View style={styles.username}>
                {/* <UserPlus stroke="#05375a" fill="#fff" width={23} height={23} />   */}
                <TextInput placeholder="Genshis Khan" style={styles.textInput} onChangeText={(val)=>handleUsernameChange(val)} autoCapitalize='none'/>
                {userInfo.userNameInputStatus ? <CheckCircle stroke="#276891" fill="#fff" width={19} height={19} /> : null}
              </View>
            </View>

            <View>
              <Text style={styles.text_footer}>EXPIRATION DATE</Text>
              <View style={styles.username}>
                {/* <Mail stroke="#05375a" fill="#fff" width={23} height={23} />   */}
                <TextInput placeholder="12" style={styles.textInput} onChangeText={(val)=>handleEmailChange(val)} autoCapitalize='none'/>
                <TextInput placeholder="November" style={styles.textInput} onChangeText={(val)=>handleEmailChange(val)} autoCapitalize='none'/>
                <TextInput placeholder="2020" style={styles.textInput} onChangeText={(val)=>handleEmailChange(val)} autoCapitalize='none'/>
                {userInfo.emailInputStatus ? <CheckCircle stroke="#276891" fill="#fff" width={19} height={19} /> : null}
              </View>
            </View>

            {/* <View>
              <Text style={styles.text_footer}>Password</Text>
              <View style={styles.password}>
                <Lock stroke="#05375a" fill="#fff" width={20} height={20} />
                <TextInput placeholder="Password" style={styles.textInput} secureTextEntry={userInfo.secureTextEntry} onChangeText={(val)=>handlePasswordChange(val)}/>
                <TouchableOpacity onPress={(val)=>handleSecureTextEntry(val)}>
                  {userInfo.secureTextEntry? <EyeOff stroke="grey" fill="#fff" width={19} height={19} /> : <Eye stroke="#276891" fill="#fff" width={19} height={19} />}
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <Text style={styles.text_footer}>Confirm Password</Text>
              <View style={styles.confirmpassword}>
                <Lock stroke="#05375a" fill="#fff" width={20} height={20} />
                <TextInput placeholder="Confirm Password" style={styles.textInput} secureTextEntry={userInfo.secureTextEntryConfirm} onChangeText={(val)=>confirmNewPassword(val)}/>
                <TouchableOpacity onPress={(val)=>handleSecureTextEntryPasswordUpdate(val)}>
                  {userInfo.secureTextEntryConfirm? <EyeOff stroke="grey" fill="#fff" width={19} height={19} /> : <Eye stroke="#276891" fill="#fff" width={19} height={19} />}
                </TouchableOpacity>
              </View>
            </View> */}

            <View>
                <TouchableOpacity 
                  onPress={()=>createUser()}
                  // {createUser ?navigation.navigate('SignInScreen')} 
                  >
                  <LinearGradient
                      colors={['#276891', '#1B4965']}
                      style={styles.signIn}
                  >
                      <Text style={styles.textSign} >Complete Order</Text>
                  </LinearGradient>
                </TouchableOpacity>

                {/* <TouchableOpacity 
                  onPress={()=>navigation.navigate('SignInScreen')}
                  style={styles.signUp}
                >
                    <Text style={[styles.textSign, {
                      color: '#276891'
                    }]}>Sign In</Text>
                </TouchableOpacity> */}
            </View>
            
          </View>
        
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1.5, 
      backgroundColor: '#CFE5F2'
    },
    card: {
      flexDirection: 'row'
    },
    header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 10
    },
    footer: {
      flex: 4,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
    },
    text_header: {
      color: '#276891',
      fontWeight: 'bold',
      fontSize: 30,
      fontStyle: "italic"
    },
    text_footer: {
      color: '#05375a',
      fontSize: 18
    },
    username: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5,
      marginBottom: 20
    },
    password: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5,
      marginBottom: 20
    },
    confirmpassword: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5,
      marginBottom: 50
    },
    actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
    },
    textInput: {
      flex: 5,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
    },
    errorMsg: {
      color: '#FF0000',
      fontSize: 14,
    },
    button: {
      alignItems: 'center',
      marginTop: 50
    },
    signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      marginBottom: 20
    },
    signUp: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#276891',
      borderWidth: 1,
      borderRadius: 10,
    },
    textSign: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold'
    }
  })
  export default ShopScreen