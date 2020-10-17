import React from 'react';
import { SafeAreaView, View, Text, Alert } from 'react-native';

import InputPanel from './components/InputPanel';

const App = () => {
    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 50 }}>Hello World</Text>
            </View>

            <InputPanel
                sendText={myValue => console.log(myValue)}
            />

        </SafeAreaView>
    )
}

export default App;
