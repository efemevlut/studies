import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  SafeAreaView,
  TextInput,
  Dimensions,
} from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
      Alert.alert("Merhaba", `Email: ${email}, Pass: ${password}`)
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{margin: 20, fontSize: 40}}>Hello</Text>
        <View style={styles.input}>
          <TextInput
            placeholder="Enter Email"
            onChangeText={(userText) => setEmail(userText)}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={(userPass) => setPassword(userPass)}
          />
        </View>

        <Button title="Login" onPress={login}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    width: Dimensions.get('window').width * 0.8,
  },
});

export default App;
