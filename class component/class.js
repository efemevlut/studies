import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            userName: "",
            createDate: new Date()
        }

        console.log("Constructor")
    }

    componentDidMount() {
        console.log("Component Did Mounth")
    }

    render() {
        return (
            <View>
                <Text>{this.state.counter}</Text>
                <Button
                    title="up"
                    onPress={() => this.setState({
                    counter: this.state.counter + 1
                        
                    })}
                />
            </View>
        )
    }
}

export default App;