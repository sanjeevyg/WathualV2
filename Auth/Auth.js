import React from 'react';
import { CustomDarkTheme, CustomDefaultTheme} from '../components/darkTheme';

export default function() {
  const AuthContext = React.createContext();
  const[isDarkTheme, setIsDarkTheme] = React.useState(true);
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme; 
  

  const authContext = ({
    signIn: async(newToken) => {
      console.log(newToken)
      const token = String(newToken)
      try {
        await AsyncStorage.setItem('userToken', token);
      } catch(e) {
        console.log(e);
      }
      console.log('user token: ', token);
      dispatch({ type: 'LOGIN', token: token });
    },
    signOut: async() => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
    },
    toggleTheme: () => {
      setIsDarkTheme( isDarkTheme => !isDarkTheme );
    }
  });


  return [authContext, theme]

}
