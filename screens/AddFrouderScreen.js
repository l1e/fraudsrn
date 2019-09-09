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
            error: [
                {name:''},
                {lastName:''},
                {phone:''},
                {url:''},
                {cardNumber:''},
                {shortDesc:' shDec'},
                {desc:'desc'},
            ],
            errorShortDesc:'',
        };
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
    handlerChangeName  = (val)=>{
        this.setState({
            froudName: val
        });
        this.validateForm(val, 'name');

    };
    handlerChangeNameLast = (val)=>{
        this.setState({
            froudNameLast: val
        });
        this.validateForm(val, 'lastName');
    };
    handlerChangeNumber = (val)=>{
        this.setState({
            froudNumber: val
        });
        this.validateForm(val, 'phone');
    };
    handlerChangeUrl = (val)=>{
        this.setState({
            froudUrl: val
        });
        this.validateForm(val, 'url');
    };
    handlerCreditCardNumber = (val)=>{
        this.setState({
            froudCreditCard: val
        });
        this.validateForm(val, 'cardNumber');
    };

    handlerShortDescription = (val)=>{
            this.setState({
                froudShortDescription: val
            });
        this.validateForm(val, 'shDesc');
    };

    handlerDescription = (val)=>{
            this.setState({
                froudDescription: val
            });
        this.validateForm(val, 'desc');
    };

    checkAllInputFields=()=>{
        let  checkInpTut = [ this.state.froudName,
            this.state.froudNameLast,
            this.state.froudNumber,
            this.state.froudUrl,
            this.state.froudCreditCard,
            this.state.froudShortDescription,
            this.state.froudDescription];
        let inputKeys = ['name','lastName','phone','url','cardNumber','shDesc','desc'];
        let statusInput = [];
        for (let i=0 ; checkInpTut.length > i ; i++ ){
            statusInput.push(this.validateForm(checkInpTut[i],inputKeys[i]));
        }

        let checkIsAllTrue= statusInput.every(function (elem) {
           return elem === true;
        });
        return checkIsAllTrue;
    };

    submitInformation = () => {
        let statusForm = this.checkAllInputFields();
        if (statusForm=== true) {
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
            Alert.alert("Ошибка","Заполните оязательные поля");
        }

    };
    validateForm=(item,type)=>{
        let messages = {
            changName: 'Your name too short. Minimum 5 characters',
            changLast: 'Your last name too short. Minimum 5 characters',
            changNumber: 'Your number too short. Minimum  14 characters',
            changUrl: 'Your name too short. Minimum 13 characters',
            changCardNumber: 'Your card number too short. Minimum 25 characters',
            changShortDesc: 'Your short description too short. Minimum 10 characters',
            changDesc: 'Your description too short. Minimum 50 characters',
        };
        let status = null;
        let oldStae = this.state.error;

        switch (type) {
            case 'name':
                if (item.length > 5){
                    status = '';
                    oldStae.name = status ;
                }else{
                    status = messages.changName;
                    oldStae.name =status ;

                    this.setState({error: oldStae})
                }
                break;
            case 'lastName':
                if (item.length > 5){
                    status = '';
                    oldStae.lastName = status ;
                }else{
                    status = messages.changLast;
                    oldStae.lastName =status ;

                    this.setState({error: oldStae})
                }
                break;
            case 'phone':
                if (item.length > 14){
                    status = '';
                    oldStae.phone = status ;
                }else{
                    status = messages.changNumber;
                    oldStae.phone =status ;

                    this.setState({error: oldStae})
                }
                break;
            case 'url':
                if (item.length > 13){
                    status = '';
                    oldStae.url = status ;
                }else{
                    status = messages.changUrl;
                    oldStae.url =status ;

                    this.setState({error: oldStae})
                }
                break;
            case 'cardNumber':
                if (item.length > 13){
                    status = '';
                    oldStae.cardNumber = status ;
                }else{
                    status = messages.changCardNumber;
                    oldStae.cardNumber =status ;

                    this.setState({error: oldStae})
                }
                break;
            case 'shDesc':
                if (item.length > 10){
                    status = '';
                    oldStae.shortDesc = status ;
                }else{
                    status = messages.changShortDesc;
                    oldStae.shortDesc =status ;

                    this.setState({error: oldStae})
                }
                break;

            case 'desc':
                if (item.length > 50){
                    status = '';
                    oldStae.desc = status ;
                }else{
                    status = messages.changDesc;
                    oldStae.desc =status ;

                    this.setState({error: oldStae})
                }
                break;
            default:
                status = 'Eroor';

        }
        if (status ===''){
            return true;
        }
        else{
            return false;
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

                    {this.state.error.name ?(
                        <Text style={styles.error}>{this.state.error.name} </Text>
                    ):(
                        null
                    )}

                     {this.state.error.lastName ?(
                    <Text style={styles.error}>{this.state.error.lastName} </Text>
                    ):(
                       null
                    )}

                    {this.state.error.phone ?(
                    <Text style={styles.error}>{this.state.error.phone} </Text>
                    ):(
                        null
                    )}

                    {this.state.error.url ?(
                        <Text style={styles.error}>{this.state.error.url} </Text>
                    ):(
                        null
                    )}

                    {this.state.error.cardNumber ?(
                        <Text style={styles.error}>{this.state.error.cardNumber} </Text>
                    ):(
                        null
                    )}

                    {this.state.error.shortDesc ?(
                        <Text style={styles.error}>{this.state.error.shortDesc} </Text>
                    ):(
                        null
                    )}

                    {this.state.error.desc ?(
                        <Text style={styles.error}>{this.state.error.desc} </Text>
                    ):(
                        null
                    )}


                    <TextInput style={styles.inputName}
                               onChangeText={this.handlerChangeName}
                               placeholder={this.state.lang.addfrouder_name}
                               placeholderTextColor={placeHolderColor}
                               value={this.state.froudName}
                               maxLength={10}
                    />
                    <TextInput style={styles.input}
                               onChangeText={this.handlerChangeNameLast}
                               placeholder={this.state.lang.addfrouder_lastname}
                               placeholderTextColor={placeHolderColor}
                               value={this.state.froudNameLast}
                               maxLength={20}
                    />
                    <TextInput style={styles.input}
                               onChangeText={this.handlerChangeNumber}
                               placeholder={this.state.lang.addfrouder_number}
                               placeholderTextColor={placeHolderColor}
                               value={this.state.froudNumber}
                               maxLength={20}
                               keyboardType={'number-pad'}
                    />
                    <TextInput style={styles.input}
                               onChangeText={this.handlerChangeUrl}
                               placeholder={this.state.lang.addfrouder_url}
                               placeholderTextColor={placeHolderColor}
                               value={this.state.froudUrl}
                               maxLength={40}
                    />
                    <TextInput style={styles.input}
                               onChangeText={this.handlerCreditCardNumber}
                               placeholder={this.state.lang.addfrouder_card}
                               placeholderTextColor={placeHolderColor}
                               value={this.state.froudCreditCard}
                               maxLength={25}
                               keyboardType={'numeric'}
                    />
                    <TextInput style={styles.inputShortDescription}
                               onChangeText={this.handlerShortDescription}
                               placeholder={this.state.lang.addfrouder_shortdesc}
                               placeholderTextColor={placeHolderColor}
                               value={this.state.froudShortDescription}
                               numberOfLines={4}
                               maxLength={90}
                               multiline={true}
                    />
                    <TextInput style={styles.inputDescription}
                               onChangeText={this.handlerDescription}
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
    inputName:{
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
    error:{
      color:'#993322'
    },

});

export default AddFrouderScreen;