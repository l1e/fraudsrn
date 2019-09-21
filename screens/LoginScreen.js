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
        console.log('I clicked');
        const { email, password } = this.state;
        if (this.state.email.length  < 4 || this.state.password.length < 7 ){
            this.setState({errorMessage:"Write data to fields. In password should exist 8 symbols."});
            return;
        }
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('Main'))
            .catch(error => this.setState({ errorMessage: error.message }))
    };
    render() {
        return (
            <SafeAreaView style={styles.body}>
                <View style={styles.content}>
                    <Text style={styles.title}>Login</Text>
                    {this.state.errorMessage &&
                    <Text style={styles.errorMessage}>
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
                            title="Login"
                            onPress={this.handleLogin}
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
        paddingTop: 40,
        paddingBottom: 20,
    },
    title:{
        textAlign: 'center'

    },
    form:{
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
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
    errorMessage:{
        textAlign: 'center',
        color: '#ff1037',
        marginTop: 10,
        marginBottom: 10
    }

});

export default LoginScreen;
