import axios from "axios"
import React from 'react';
import { View, Text, Button } from 'react-native';



const Main = (props) => {

    let myData = []

    const fetchData = () => {
        console.log("starting fetch...")
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                console.log(response)
                myData = response.data;
            })
        console.log(myData)
            // .catch(error => console.log(error))
        console.log("end fetch")
    }

    return(
        <View>
            <Text style={{fontSize:20}}>Main</Text>
            <Button 
                title="Fetch Data"
                onPress={fetchData}
            />
        </View>
    )
}

export default Main;