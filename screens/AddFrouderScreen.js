import React,{Component} from 'react';
import {Text, View,StyleSheet, TextInput, Button, ScrollView,SafeAreaView , Alert} from 'react-native';

import Localization from "../component/Localization";

import {db} from '../firebase/config';

let addItem = item => {
    db.ref('/items').push({
        firstname: item.name,
        lastname: item.lastname ,
        phone: item.phone ,
        url: item.url ,
        card: item.card ,
        shortdesc: item.shortdesc,
        desc: item.desc ,
    });
};


// Set color constants START
let placeHolderColor= '#909497';
let inputText= '#25282b';


// Set color constants END

class AddFrouderScreen extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            title: Localization().addfrouder_title ,
        };
    };


    constructor(props) {
        super(props);
        this.state = {
            froudName: '',
            froudNameLast: '',
            froudNumber: '',
            froudUrl: '',
            froudCreditCard: '',
            froudShortDescription: '',
            froudDescription: '',
            lang: Localization(),
        };
        titleScreen = 'Fuck '
    };

    clearInput= ()=>{
        this.setState({
            froudName: '',
            froudNameLast: '',
            froudNumber: '',
            froudUrl:'',
            froudCreditCard: '',
            froudShortDescription: '',
            froudDescription: ''
        })
    };
    hadlerChangeName  = (val)=>{
        this.setState({
            froudName: val
        });
    };
    hadlerChangeNameLast = (val)=>{
        this.setState({
            froudNameLast: val
        });
    };
    hadlerChangeNumber = (val)=>{
        this.setState({
            froudNumber: val
        });
    };
    hadlerChangeUrl = (val)=>{
        this.setState({
            froudUrl: val
        });
    };
    hadlerCreditCardNumber = (val)=>{
        this.setState({
            froudCreditCard: val
        });
    };

    hadlerShortDescription = (val)=>{
        this.setState({
            froudShortDescription: val
        });
    };

    hadlerDescription = (val)=>{
        this.setState({
            froudDescription: val
        });
    };
    submitInformation = () => {
        if (this.state.froudShortDescription != '' && this.state.froudDescription != '') {
            addItem({
                'name': this.state.froudName,
                'lastname': this.state.froudNameLast,
                'phone': this.state.froudNumber,
                'url': this.state.froudUrl,
                'card': this.state.froudCreditCard,
                'shortdesc': this.state.froudShortDescription,
                'desc': this.state.froudDescription});
            Alert.alert('Мошенник добавлен','Мошенник добавлен');
            this.clearInput();
        }else{
            Alert.alert("Ошибка","Обязательным является поле с кратким описанием и описанием.");
        }

    };

    render(){

        return (
            <SafeAreaView style={styles.body}>
                <ScrollView>
                <View style={styles.container}>
                    <View style={styles.form_titles}>
                        <Text style={styles.title}>{this.state.lang.addfrouder_desc}</Text>
                    </View>
                    <TextInput style={styles.input}
                               onChangeText={this.hadlerChangeName}
                               placeholder={this.state.lang.addfrouder_name}
                               placeholderTextColor={placeHolderColor}
                               value={this.state.froudName}
                               maxLength={10}
                    />
                    <TextInput style={styles.input}
                               onChangeText={this.hadlerChangeNameLast}
                               placeholder={this.state.lang.addfrouder_lastname}
                               placeholderTextColor={placeHolderColor}
                               value={this.state.froudNameLast}
                               maxLength={20}
                    />
                    <TextInput style={styles.input}
                               onChangeText={this.hadlerChangeNumber}
                               placeholder={this.state.lang.addfrouder_number}
                               placeholderTextColor={placeHolderColor}
                               value={this.state.froudNumber}
                               maxLength={20}
                               keyboardType={'number-pad'}
                    />
                    <TextInput style={styles.input}
                               onChangeText={this.hadlerChangeUrl}
                               placeholder={this.state.lang.addfrouder_url}
                               placeholderTextColor={placeHolderColor}
                               value={this.state.froudUrl}
                               maxLength={40}
                    />
                    <TextInput style={styles.input}
                               onChangeText={this.hadlerCreditCardNumber}
                               placeholder={this.state.lang.addfrouder_card}
                               placeholderTextColor={placeHolderColor}
                               value={this.state.froudCreditCard}
                               maxLength={25}
                               keyboardType={'numeric'}
                    />
                    <TextInput style={styles.inputShortDescription}
                               onChangeText={this.hadlerShortDescription}
                               placeholder={this.state.lang.addfrouder_shortdesc}
                               placeholderTextColor={placeHolderColor}
                               value={this.state.froudShortDescription}
                               numberOfLines={4}
                               maxLength={90}
                               multiline={true}
                    />
                    <TextInput style={styles.inputDescription}
                               onChangeText={this.hadlerDescription}
                               placeholder={this.state.lang.addfrouder_description}
                               placeholderTextColor={placeHolderColor}
                               value={this.state.froudDescription}
                               numberOfLines={4}
                               maxLength={8000}
                               multiline={true}
                    />
                    <View style={styles.button}>
                        <Button
                            onPress={this.submitInformation}
                            title={this.state.lang.sendinfo}
                            color="#5499C7"
                        />
                    </View>
                </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    body:{
        flex: 1,
        paddingTop: 40,
        paddingBottom: 30,
        backgroundColor: '#e8ebf4',
    },
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    title:{
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#554433',
        paddingBottom: 0,
    },
    input:{
        width: '70%',
        borderBottomColor: '#909497',
        borderBottomWidth: 2,
        color:  inputText,
        textAlign: 'left',
    },
    form_titles:{
        paddingBottom: 25,
    },
    button:{
        paddingTop: 20,
        paddingBottom: 20,
    },
    inputShortDescription:{
        width: '70%',
        height: 60,
        borderBottomColor: '#909497',
        borderBottomWidth: 2,
        color:  inputText,
    },
    inputDescription:{
        width: '70%',
        height: 100,
        borderBottomColor: '#909497',
        borderBottomWidth: 2,
        color:  inputText,
    },

});


export default AddFrouderScreen;