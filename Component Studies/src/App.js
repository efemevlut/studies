import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Alert
} from 'react-native';

import MyButton from './components/MyButton'

const App = () => {

  function sayHello() {
    Alert.alert("Hello there!")
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Text style={{textAlign: "center", fontSize: 40}}>Hello World</Text>  
      </View>
      
      <MyButton banner="Press me!!!" color ="#26c6da" myOnPress={sayHello}/>
      <MyButton myOnPress={() => {
        Alert.alert("😎" , "Hi There", [{text: "Niceeee"}])
        }}
      />

    </SafeAreaView>
  );
};


export default App;
