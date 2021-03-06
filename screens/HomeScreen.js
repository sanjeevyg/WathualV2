
import React, {Component} from 'react';
import { View, ActivityIndicator, ScrollView, FlatList, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { NativeRouter } from "react-router-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      price: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/watches')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }
  
  render() {
    const { data, isLoading } = this.state;
    return (
      <NativeRouter>
        <View style={styles.container}>  
          {isLoading ? <ActivityIndicator style={styles.loading}/> : (
          <FlatList
            data={data} 
            keyExtractor={({image}) => image}
            renderItem={({ item }) => (    
              <ScrollView>    
                <TouchableOpacity style={styles.header} onPress={() => this.props.navigation.navigate("Details", {id: item.id})}>
                    <Image 
                        style={styles.logo}
                        source={{uri: item.image}}
                        resizeMode={'cover'}
                      />
                    <Text style={styles.text} >Price: ${item.price}</Text>
                </TouchableOpacity>
              </ScrollView>
            )}
          />
          )}
        </View>
      </NativeRouter>
    )
  }
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.30;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff'
  },
  loading: {
    marginTop: 300,
    justifyContent: 'center',
    alignContent: 'center'
  },
  header: {
      flex: 4,
      justifyContent: 'center',
      alignItems: 'center'
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo,
      marginLeft: 0,
      marginTop: 30
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  },
  watch: {
    justifyContent: 'center',
  }
});




