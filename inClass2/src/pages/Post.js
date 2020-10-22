import React from 'react';
import {View, Text} from 'react-native';

const Post = (props) => {
  console.log('post rendering');
  return (
    <View>
      <Text style={{fontSize:50}}>Post</Text>
    </View>
  );
};

export {Post};
