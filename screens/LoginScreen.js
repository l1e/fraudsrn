import React,{Component} from 'react';
import {Text, View, StyleSheet, ScrollView, SafeAreaView, ActivityIndicator, AsyncStorage, TextInput, Button} from 'react-native';

import firebase from 'react-native-firebase';

import Localization from "../component/Localization";
let base = firebase.database();

let itemsRef = base.ref('/items');
console.log(base);

let placeHolderColor= '#909497';
let inputText= '#25282b';

class LoginScreen extends Component {

    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            title: Localization().filtredList_title,
        };
    };

    state = { email: '', password: '', errorMessage: null };
    handleLogin = () => {
        // TODO: Firebase stuff...
        console.log('handleLogin')
    };
    render() {
        return (
            <SafeAreaView style={styles.body}>
                <View style={styles.content}>
                    <Text style={styles.title}>Login</Text>
                    {this.state.errorMessage &&
                    <Text style={{ color: 'red' }}>
                        {this.state.errorMessage}
                    </Text>}
                    <View style={styles.form}>
                        <TextInput
                            style={styles.textInput}
                            autoCapitalize="none"
                            placeholder="Email"
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                        />
                        <TextInput
                            secureTextEntry
                            style={styles.textInput}
                            autoCapitalize="none"
                            placeholder="Password"
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                        />
                        <Button
                            title="Login" o
                            nPress={this.handleLogin}
                            color="#5499C7"
                        />
                        <Button
                            title="Don't have an account? Sign Up"
                            onPress={() => this.props.navigation.navigate('SignUp')}
                            color="#5499C7"
                        />
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: '#e8ebf4',
        paddingTop: 10,
        paddingBottom: 0,
    },
    content:{
        flex: 1,
        width: '100%',
        height: '100%',
        paddingTop: 10,
        paddingBottom: 20,
    },
    title:{
        textAlign: 'center'

    },
    form:{
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
    },
    loadingInner:{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fill:{
        flex: 1,
    },
    textInput: {
        justifyContent:'center',
        alignItems: 'center',
        width: '70%',
        borderBottomColor: '#909497',
        borderBottomWidth: 2,
        color:  inputText,
        marginBottom: 5,

    },

});

export default LoginScreen;
