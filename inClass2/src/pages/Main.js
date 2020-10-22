import React from "react";
import {View, Text,Button} from "react-native";

const Main = (props) => {

    console.log("Main rendering")
    return (
        <View>
            <Text style={{fontSize:50}}>Main</Text>
            <Button title="Go" onPress={() => props.navigation.navigate("PostPage")} />
        </View>
    )
}

export {Main};