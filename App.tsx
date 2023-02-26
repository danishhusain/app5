import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/Component/Main';
import Cart from './src/Component/Cart';
import Colors from './src/Style/Colors';


const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={{headerShown:false}}/>
        <Stack.Screen name="Cart" component={Cart} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App