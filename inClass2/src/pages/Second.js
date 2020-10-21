import React from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';

const Second = ({navigation, route}) => {

  const userNumber = route.params.myNumber;

  console.log(route);

  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize: 40}}>Second Page</Text>
        <Text style={{fontSize: 20}}>User Number : {userNumber}</Text>
        <Text style={{fontSize: 20}}>User Name : {route.params.selectedName}</Text>
        <Button title="Go Back!" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
};

export default Second;
