import { View, Text, Dimensions, Image, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Cart from './Cart'
import { IconButton, Card, Button } from 'react-native-paper'
import { Colors } from '../Style/Colors'
import { list } from '../Data/data'

const Main = () => {
  const navigation = useNavigation()
  const { width, height } = Dimensions.get('window');
  const renderItem = ({ item }) => {
    return (
      <View style={{ justifyContent: 'space-between', backgroundColor: 'grey' }}>
        <View style={{flexDirection:'row'}}>
        <IconButton icon={'heart'} />
          <Text style={{ color: 'red' }}>{item.product.name}</Text>
          <Text style={{ color: 'red' }}>{item.product.description}</Text>
        </View>
        <View>
          <Text style={{ color: 'black' }}>{item.product.price}</Text>
        </View>
      </View>
    )
  }
  return (

    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ height: height / 3, backgroundColor: Colors.BG }}>
        <ImageBackground style={{ flex: 1, backgroundColor: '#fff' }} source={{ uri: 'https://img.freepik.com/free-photo/flat-lay-hands-cutting-cheese_23-2150062741.jpg?w=826&t=st=1677406765~exp=1677407365~hmac=432701efa61a166d41c8b48bc2f1463ba8330945d8715e01d7983eb357645633' }} >
          <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <IconButton icon={'heart'} />
            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
              <IconButton icon={'heart'} />
              <IconButton icon={'heart'} />
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={{ backgroundColor: 'red', }}>
        <Card style={{ width: '90%', justifyContent: 'center', backgroundColor: 'green', alignSelf: 'center', elevation: 10, bottom: '15%' }}>
          <View style={{ justifyContent: 'center', alignContent: 'center', alignSelf: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center' }}>Inka Resturent</Text>
            <View style={{ flexDirection: 'row', }}>
              <IconButton icon={'heart'} />
              <Text style={{ alignSelf: 'center' }}>5.0(200+)|All days: 09:00 AM - 06:00 PM</Text>
            </View>
            <View style={{ flexDirection: 'row', bottom: '7%' }}>
              <IconButton icon={'heart'} />
              <Text style={{ alignSelf: 'center' }}>Reach us at: 9854562142</Text>
            </View>
            <Button mode='contained' style={{ flexDirection: 'row', bottom: '7%', alignSelf: 'center' }}>Book A Table</Button>
          </View>
        </Card>
      </View>


      <View style={{ flex: 1, backgroundColor: 'green' }}>
        <Text style={{}}>Starter</Text>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.product.id}
        />
      </View>

      <View>
        <Button mode='contained' style={{}}>Book</Button>
      </View>
    </View>
  )
}

export default Main