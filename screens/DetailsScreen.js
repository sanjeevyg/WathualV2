import React, {useState, useEffect } from 'react';
import 'url-search-params-polyfill';
import { View, Text, StyleSheet, Image, Dimensions, navigation } from 'react-native';
import {ShoppingCart, Watch, XSquare} from "react-native-feather";


const DetailsScreen = (props) => {
  const id = props.route.params.id
  const [data, setData] = useState([]);
  const [price, setPrice] = useState([0]);
  const [count, setCount] = useState([0]);

  useEffect(() => {
    console.log("hello world")
    let mounted = true;
    fetch(`http://localhost:3000/watches/${id}`)
    .then(response => response.json())
    .then(result => {
      if(mounted) {
        setData(result)
      }
    })
   return () => mounted = false;
  }, [])

  const addToCart = () => {
    console.log("test")
    setPrice(parseInt(price) + data.price)
    setCount(parseInt(count) + 1)
  }

  const emptyCard = () => {
    setPrice(0)
    setCount(0)
  }

  return (    
      <View style={styles.container}> 
        <View >
          <Image
            style={styles.logo}
            source={{uri: data.image}}
          />
          <View  style={styles.watchCount}>
            <Text style={styles.cart}>{count}</Text>
            <ShoppingCart style={styles.cart} stroke="#05375a" fill="#fff" width={35} height={35} onPress={() => addToCart()}/>
            <Watch style={styles.cart} stroke="#05375a" fill="#fff" width={15} height={15}/>
          </View>
        </View>
          <View style={styles.description}>
            <Text style={styles.firstText}>Price:${data.price}</Text>
            <Text style={styles.text}>Brand: {data.brand}</Text>
            <Text style={styles.text}>Dial Color: {data.dial_color}</Text>
            <Text style={styles.text}>Interchangeable Strap: {data.interchangeable_strap}</Text>
            <Text style={styles.text}>Case Material: {data.case_material}</Text>
            <View style={styles.totalContainer}>
              <Text style={styles.total}>Total: ${price}</Text>
              <XSquare style={styles.x} stroke="#05375a" fill="#fff" width={18} height={18} onPress={() => emptyCard()}/>
            </View>
          </View>
    </View>
  )
}

export default DetailsScreen
const {height} = Dimensions.get("screen");
const height_logo = height*.30;

const styles = StyleSheet.create({
  container: {
    flex: 1.2, 
    backgroundColor: '#fff',
    borderTopColor: '#E5E5E5',
    borderTopWidth: 2,
    paddingTop: 15,
    marginTop: 0,
    flexDirection: 'row'
  },
  description: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#E5E5E5',
    marginBottom: 50
  }, 
  header: {
      flex: 4,
      justifyContent: 'center',
      alignItems: 'center'
  },
  totalContainer: {
    marginTop: 100,
    flexDirection: "row",
    justifyContent: "center"
  },
  x:{
    marginTop: 4,
    marginLeft: 10
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  cart: {
    marginLeft: 10,
    marginTop:50,
  },
  watchCount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -40,
    marginRight: 40
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
      marginLeft: -30,
      marginTop: 30
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop: 5,
      marginLeft: -30
  },
  firstText: {
      color: 'grey',
      marginTop: 110,
  
      marginLeft: -30
  },
  total: {
    color: '#05375a',
    fontSize: 20,
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
