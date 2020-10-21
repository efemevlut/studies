// In App.js in a new project

import * as React from 'react';
import { View, Text} from 'react-native';
import { BaseRouter, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import First from "./pages/First"
import Second from "./pages/Second"


const Stack = createStackNavigator();

function App() {

//Stack.Screen kaç sayfa varsa o kadar screen üreticez

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="First Page"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true
        }}
      >
        <Stack.Screen name="Firts Page" component={First} options={{title:"My Home"}}/>
        <Stack.Screen name="Second Page" component={Second} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;