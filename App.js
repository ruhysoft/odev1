/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { PureComponent, useState, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
  TextInput,
  FlatList,
} from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const datas = [
  {
    id: 0,
    title: 'Xiaomi Mi True Wireless Earbuds',
    imgURL:
      'https://m.media-amazon.com/images/I/51uguxa9nYL._AC._SR360,460.jpg',
    price: '₺134,77',
    inStock: true,
  },
  {
    id: 1,
    title: 'General Mobile GM 20',
    imgURL:
      'https://m.media-amazon.com/images/I/51lK00mvFaL._AC._SR180,230.jpg',
    price: '₺1.810,21',
    inStock: true,
  },
  {
    id: 2,
    title: 'Philips 58PUS8505/62 The One',
    imgURL:
      'https://m.media-amazon.com/images/I/71zLCzJcXaL._AC._SR360,460.jpg',
    price: '₺6.992,25',
    inStock: false,
  },
  {
    id: 3,
    title: 'LG 49UM7100PLB Ultra HD 4K',
    imgURL:
      'https://m.media-amazon.com/images/I/71gAldY8eGL._AC._SR360,460.jpg',
    price: '₺4.614,38',
    inStock: true,
  },
  {
    id: 4,
    title: 'Samsung Galaxy M31 SM-M315F',
    imgURL:
      'https://m.media-amazon.com/images/I/71mUIp9oCXL._AC._SR360,460.jpg',
    price: '₺2.995,80',
    inStock: true,
  },
  {
    id: 5,
    title: 'Apple AirPods Series 2',
    imgURL:
      'https://m.media-amazon.com/images/I/51XanmiXw0L._AC._SR360,460.jpg',
    price: '₺1.299,00',
    inStock: true,
  },
  {
    id: 6,
    title: 'Lenovo Tab M10 Plus',
    imgURL:
      'https://m.media-amazon.com/images/I/81JR-A35D0L._AC._SR360,460.jpg',
    price: '₺2.496,50',
    inStock: false,
  },
  {
    id: 7,
    title: 'Xiaomi Redmi 20000 Mah',
    imgURL:
      'https://images-na.ssl-images-amazon.com/images/I/41vVdTukkgL._AC_SX522_.jpg',
    price: '₺134,70',
    inStock: false,
  },
  {
    id: 8,
    title: 'Xiaomi Mijia Smart Home 360',
    imgURL:
      'https://images-na.ssl-images-amazon.com/images/I/31G-rIrW9zL._AC_UL320_SR226,320_.jpg',
    price: '₺269,73',
    inStock: true,
  },
  {
    id: 9,
    title: 'Xiaomi Mi Box S 4K Ultra HD',
    imgURL:
      'https://images-na.ssl-images-amazon.com/images/I/31sNKUGwNUL._AC_.jpg',
    price: '₺478,53',
    inStock: true,
  },
  {
    id: 10,
    title: 'Haylou Solar LS-5 Smartwatch',
    imgURL:
      'https://images-na.ssl-images-amazon.com/images/I/51kfZ4W9YSL._AC_SX522_.jpg',
    price: '₺296,00',
    inStock: true,
  },
];

class homeScreen extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={{ flex: 1, marginTop: 50, margin:20 }}>
        <Text style={[
          styles.header
        ]}>PATIKASTORE</Text>
        <TextInput
          style={styles.input}
          placeholder="Ara..."
          keyboardType="numeric"
        />
        <FlatList
          data={datas}
          extraData={this.state}
          numColumns={2}
          renderItem={({ item, index }) => (
            <View style={styles.rowItem} key={item.id}>
              <View style={styles.totalCountWrapper}>

                <Image
                  source={{ uri: item.imgURL }}
                  style={{ width: '90%', height: 200, borderWidth: 1, resizeMode: 'stretch' }}
                />
              </View>
              <View style={styles.totalCountWrapper}>
                <Text
                  style={[
                    styles.rowText
                  ]}
                >
                  {item.title}
                </Text>
              </View>

              {item.inStock == true ?
                <View style={styles.totalCountWrapper}>
                  <Text
                    style={[
                      styles.rowText
                    ]}
                  >{item.price}
                  </Text>
                </View>
                :
                <View style={styles.totalCountWrapper2}>
                  <Text
                    style={[
                      styles.rowText
                    ]}
                  >{item.price}
                  </Text>
                  <Text
                    style={[
                      styles.rowText2
                    ]}
                  >
                    STOKTA YOK
                  </Text>
                </View>
              }

            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  rowText: {
    fontSize: 14, color: '#222', fontWeight: 'bold',
  },
  rowText2: {
    fontSize: 14, color: 'red', fontWeight: 'bold',
  },

  totalCountWrapper: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: windowWidth / 2,
    padding:10
  },
  totalCountWrapper2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowItem: {
    alignItems: 'center',
    width: '50%',
    marginTop: 10,
    backgroundColor: '#eceff1',
    padding: 20,
    margin: 3
  },
  header: {
    fontSize: 24, color: 'purple', fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    fontSize: 20,
    backgroundColor: '#eceff1'
  },
});

export default homeScreen;
