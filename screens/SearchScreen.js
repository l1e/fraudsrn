import React,{Component} from 'react';
import {Text, View, Button, Alert} from 'react-native';

class SearchScreen extends Component {
    static navigationOptions = {
        title: 'Поиск мошенника',
    };
    render(){
        return (
            <View>
                <Text> SearchScreen </Text>
            </View>
        );
    }
}

export default SearchScreen