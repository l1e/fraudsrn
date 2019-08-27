import React,{Component} from 'react';
import {Text, View, ScrollView, Button, StyleSheet,TextInput, Alert} from 'react-native';

class AboutApp extends Component {

    static navigationOptions = {
        title: 'О приложении',
    };
    render(){
        return (
                <View style={styles.content}>
                    <Text style={styles.text}>
                        Vepbit
                    </Text>
                    <Text style={styles.text}>
                        Vepbit@gmail.com
                    </Text>
                    <Text style={styles.text}>
                        version: 0.2.4
                    </Text>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    content:{
        flex: 1,
        backgroundColor: '#e8ebf4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        textAlign: 'center',
    },

});

export default AboutApp;