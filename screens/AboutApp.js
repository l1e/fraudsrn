import React,{Component} from 'react';
import {Text, View, ScrollView, Button, StyleSheet,TextInput, Alert} from 'react-native';
import Localization from "../component/Localization";

class AboutApp extends Component {

    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            title: Localization().aboutapp_title ,
        };
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
                        version: 0.6.0
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
