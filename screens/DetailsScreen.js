import React, {useState, useEffect } from 'react';
import 'url-search-params-polyfill';
import { View, Text, StyleSheet, Image, Dimensions, navigation, Button, TouchableOpacity } from 'react-native';
import {Bold, ShoppingCart, Watch, XSquare} from "react-native-feather";


const DetailsScreen = (props) => {
  const [data, setData] = useState([]);
  const [price, setPrice] = useState([0]);
  const [count, setCount] = useState([0]);

  const id = props.route.params.id
  
  useEffect(() => {
    let mounted = true;
    fetch(`http://localhost:3000/watches/${id}`)
    .then(response => response.json())
    .then(result => {
      if(mounted) {
        setData(result)
      }
    })
   
  }, [id])

  const addToCart = () => {
    setPrice(parseInt(price) + data.price)
    setCount(parseInt(count) + 1)
  }

  const emptyCard = () => {
    setPrice(0)
    setCount(0)
  }

  return (    
    <View style={styles.container}> 

          <View style={styles.button}>
            <Button 
              title="Close"
              onPress={() => {props.navigation.navigate('Home')}}
            />
          </View>

          <View style={styles.image}>
          <TouchableOpacity onPress={() => addToCart()}>
            <Image
              style={styles.logo}
              source={{uri: data.image}}
            />
          </TouchableOpacity>
          </View>

         

          <View style={styles.description}>
            <Text style={styles.firstText}>Price:${data.price}</Text>
            <Text style={styles.text}>Brand: {data.brand}</Text>
            <Text style={styles.text}>Dial Color: {data.dial_color}</Text>
            <Text style={styles.text}>Interchangeable Strap: {data.interchangeable_strap}</Text>
            <Text style={styles.text}>Case Material: {data.case_material}</Text>
          </View>
          <View style={styles.watchCount}>
              <Text style={styles.cart}>{count}</Text>
              <ShoppingCart onPress={() => addToCart()} style={styles.cart} stroke="#05375a" fill="#fff" width={35} height={35}/>
              <Watch style={styles.watch} stroke="#05375a" fill="#fff" width={15} height={15}/>
          </View>
          <View style={styles.totalContainer}>
            <Text style={styles.total}>Total: ${price}</Text>
            <XSquare style={styles.x} stroke="#05375a" fill="#fff" width={18} height={18} onPress={() => emptyCard()}/>
          </View>
          
          </View>
  )
}

export default DetailsScreen
const {height} = Dimensions.get("screen");
const height_logo = height*.30;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    // backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  image: {
    flex: 1.7
  },
  button: {
    flex: .3,
    // backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    marginTop: 50,
    marginLeft: -300
  },
  logo: {
    flex: 1,
    paddingTop: 0,
    padding: 100
  },
  description: {
    flex: .9,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'yellow',
  },
  watchCount: {
    flex: .2,
    flexDirection: "row",
    marginTop: 20,
    // backgroundColor: 'gold',
    justifyContent: "center",
    alignItems: "center"
  }, 
  totalContainer: {
    flex: .2,
    backgroundColor: "grey",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 200,
    paddingLeft: 9,
    paddingRight: 9,
    borderRadius: 7,
    fontSize: 20,
  },
  text: {
    fontSize: 20,
    color: 'grey',
  },
  firstText: {
    fontSize: 20,
    color: 'grey',
    fontWeight: 'bold',
    padding: 10,
    fontStyle: "italic"
  },
  total: {
    fontSize: 25,
    color: 'white',
  },
  cart: {
    fontSize: 20,
    padding: 5,
  },
  watch: {
    padding: 14,
    marginLeft: 7,
    // backgroundColor: "blue"
  },
  x: {
    padding: 15,
    marginLeft: 5,
    // backgroundColor: "red"
  }

 
});
