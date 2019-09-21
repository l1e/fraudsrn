import React,{Component} from 'react';
import {Text, View, StyleSheet, ScrollView, SafeAreaView, ActivityIndicator, AsyncStorage, TextInput, Button} from 'react-native';

import Itemfroud from '../component/Itemfroud';
import firebase from 'react-native-firebase';

import Localization from "../component/Localization";
let base = firebase.database();

let itemsRef = base.ref('/items');
console.log(base);

let placeHolderColor= '#909497';
let inputText= '#25282b';

class SignUpScreen extends Component {

    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            title: Localization().filtredList_title,
        };
    };
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorMessage: null
        }
    };
    handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => this.props.navigation.navigate('Welcome'))
            .catch(error => this.setState({ errorMessage: error.message }))
    };

    render() {
        return (
            <SafeAreaView style={styles.body}>
                <View style={styles.content}>
                    <Text style={styles.title}>Sign Up</Text>
                    {this.state.errorMessage &&
                    <Text style={{ color: 'red' }}>
                        {this.state.errorMessage}
                    </Text>}
                    <View style={styles.form}>
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor={placeHolderColor}
                            autoCapitalize="none"
                            style={styles.textInput}
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                        />
                        <TextInput
                            secureTextEntry
                            placeholder="Password"
                            placeholderTextColor={placeHolderColor}
                            autoCapitalize="none"
                            style={styles.textInput}
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                        />
                        <Button title="Sign Up" onPress={this.handleSignUp}
                            color="#5499C7"
                            style={styles.button}
                        />
                        <Button
                            title="Already have an account? Login"
                            onPress={() => this.props.navigation.navigate('Login')}
                            color="#5499C7"
                            style={styles.button}
                        />
                    </View>

                </View>
            </SafeAreaView>
        )
    };
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
    },
    textInput:{
        justifyContent:'center',
        alignItems: 'center',
        width: '70%',
        borderBottomColor: '#909497',
        borderBottomWidth: 2,
        color:  inputText,
        marginBottom: 5,

    },
    button:{
        marginTop: 15,
    }

});

export default SignUpScreen;
