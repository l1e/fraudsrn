import React,{Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    ActivityIndicator,
    AsyncStorage,
    TextInput,
    Button,
    TouchableOpacity
} from 'react-native';

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
    constructor(props){
        super(props);
        this.state = { email: '',
            password: '',
            errorMessage: null,
            lang: Localization()
        };
    }

    handleLogin = () => {
        console.log('I clicked');
        const { email, password } = this.state;
        if (this.state.email.length  < 4 || this.state.password.length < 7 ){
            this.setState({errorMessage:this.state.lang.Login_errorShort});
            return;
        }
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('Main'))
            .catch((error) => {
                switch (error.code){
                    case 'auth/invalid-email':
                        console.log('1');
                        this.setState({ errorMessage: this.state.lang.Login_errorEmail ,errorCode:error.code});
                        break;
                    case 'auth/wrong-password':
                        console.log('2');
                        this.setState({ errorMessage: this.state.lang.Login_errorPassword  ,errorCode:error.code});
                        break;
                    case 'auth/user-not-found':
                        this.setState({ errorMessage: this.state.lang.Login_errorEmailWrong  ,errorCode:error.code});
                        break;
                    case 'auth/unknown':
                        this.setState({ errorMessage: error.message ,errorCode:error.code});
                        break;
                    default:
                        this.setState({ errorMessage: error.message ,errorCode:error.code})
                }
            })
    };
    render() {
        return (
            <SafeAreaView style={styles.body}>
                <View style={styles.content}>
                    <Text style={styles.title}>{this.state.lang.Login_title} </Text>
                    {this.state.errorMessage &&
                    <Text style={styles.errorMessage}>
                        {this.state.errorMessage}
                    </Text>}
                    <View style={styles.form}>
                        <TextInput
                            style={styles.textInput}
                            autoCapitalize="none"
                            placeholder={this.state.lang.form_email}
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                        />
                        <TextInput
                            secureTextEntry
                            style={styles.textInput}
                            autoCapitalize="none"
                            placeholder={this.state.lang.form_password}
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                        />

                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.handleLogin}
                        >
                            <Text style={styles.buttonText}>{this.state.lang.Login_submit} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('SignUp')}
                        >
                            <Text style={styles.buttonText}> {this.state.lang.Login_haveAccount} </Text>
                        </TouchableOpacity>
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
    }

});

export default LoginScreen;
