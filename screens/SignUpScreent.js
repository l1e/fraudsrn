import React,{Component} from 'react';
import {Text, View, StyleSheet, ScrollView, SafeAreaView, ActivityIndicator, AsyncStorage, TextInput, Button, TouchableOpacity} from 'react-native';

import firebase from 'react-native-firebase';

import Localization from "../component/Localization";

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
            errorMessage: null,
            errorCode: null,
            lang: Localization(),
        }
    };
    handleSignUp = () => {
        if (this.state.email.length  < 4 || this.state.password.length < 7 ){
            this.setState({errorMessage:this.state.lang.SginUp_errorShort});
            return;
        };
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => this.props.navigation.navigate('Welcome'))
            .catch((error) => {
                switch (error.code){
                    case 'auth/invalid-email':
                        console.log('1');
                        this.setState({ errorMessage: this.state.lang.SginUp_errorEmail});
                        break;
                    case 'auth/email-already-in-use':
                        this.setState({ errorMessage: this.state.lang.SginUp_errorUsed  ,errorCode:error.code});
                        break;
                    case 'auth/unknown':
                        this.setState({ errorMessage: error.message});
                        break;
                    default:
                        this.setState({ errorMessage: error.message, errorCode: error.code});
                }
            })
    };

    render() {
        return (
            <SafeAreaView style={styles.body}>
                <View style={styles.content}>
                    <Text style={styles.title}>{this.state.lang.SginUp_title}</Text>
                    {this.state.errorMessage &&
                    <Text style={styles.errorMessage}>
                        {this.state.errorMessage}
                        {/*{this.state.errorCode}*/}
                    </Text>}
                    <View style={styles.form}>
                        <TextInput
                            placeholder={this.state.lang.form_email}
                            placeholderTextColor={placeHolderColor}
                            autoCapitalize="none"
                            style={styles.textInput}
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                        />
                        <TextInput
                            secureTextEntry
                            placeholder={this.state.lang.form_password}
                            placeholderTextColor={placeHolderColor}
                            autoCapitalize="none"
                            style={styles.textInput}
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                        />

                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.handleSignUp}
                        >
                            <Text style={styles.buttonText}>{this.state.lang.SginUp_submit}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('Login')}
                        >
                            <Text style={styles.buttonText}>{this.state.lang.SginUp_haveAccount}  </Text>
                        </TouchableOpacity>
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
        marginBottom: 10
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
        marginTop: 10,
    },
    buttonText:{
      backgroundColor:  '#5499C7',
        color:'#fff',
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 8,
        paddingRight: 8,
        textTransform: 'uppercase'
    },
    errorMessage:{
        textAlign: 'center',
        color: '#ff1037',
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },

});

export default SignUpScreen;
