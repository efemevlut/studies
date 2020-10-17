import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const MyButton = (props) => {
    let selectedColor = props.color;

    if(selectedColor=== undefined) {
        selectedColor = "#a5d6a7"
    }

    return (
        <TouchableOpacity 
            style={[styles.buttonContainer, {backgroundColor:selectedColor}]} 
            onPress={props.myOnPress}
        >
            <Text>{props.banner}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
      backgroundColor: "#a5d6a7",
      padding: 15,
      margin: 10,
      borderRadius: 10,
      alignItems: "center",
    }
})

export default MyButton;