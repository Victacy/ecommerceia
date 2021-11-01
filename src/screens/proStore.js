import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Home from '../screens/home'

const BASE_URL = 'https://raw.githubusercontent.com/sdras/sample-vue-shop/master/dist';

const products = [
  {
    name: 'Nike Shoes',
    price: 449.99,
    img: `${BASE_URL}/1.png`
  },
  {
    name: 'Shoes 2',
    price: 389.99,
    img: `${BASE_URL}/2.png`
  },
  {
    name: 'Shoes 3',
    price: 249.99,
    img: `${BASE_URL}/3.png`
  },
  {
    name: 'Shoes 4',
    price: 185.99,
    img: `${BASE_URL}/4.png`
  },
];

export default function ProStore() {
    return (

        <View>
                   {
            products.map((product, index) => {
            //   return(
                
                    
                      
                    
                
            //   )
            })
          }
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    col: {
        flex: 1,
    },
})
