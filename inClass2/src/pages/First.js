import React, {useState} from "react";
import {SafeAreaView, Text, View, Button, TextInput} from "react-native";

const number = Math.round(Math.random() * 100)

const First = (props) => {
    
    const [userName, setUserName] = useState("")

    return (
        <SafeAreaView>
            <View>
                <Text style={{fontSize:40}}>First Page</Text>
                <Text style={{fontSize:20}}>{number}</Text>
                <Text style={{fontSize:20, fontWeight: "bold", margin:5, padding:5}}>My name is {userName}</Text>
                <View>
                    <TextInput 
                        style={{backgroundColor: "#e0e0e0", padding:10, margin:10, borderRadius:10}}
                        value={userName}
                        onChangeText={(text) => setUserName(text)}
                    />
                </View>
                
                <Button 
                    title="Next Page"
                    onPress={() => props.navigation.navigate("Second Page", {
                        myNumber : number,
                        selectedName: userName
                    })}
                    
                />
                
            </View>
        </SafeAreaView>
    )
}

export default First;