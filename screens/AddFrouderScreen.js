import React,{Component} from 'react';
import {Text, View,StyleSheet, TextInput, Button, ScrollView, Alert} from 'react-native';

import {db} from '../firebase/config';

let addItem = item => {
    db.ref('/items').push({
        firstname: item.name,
        lastname: item.lastname ,
        phone: item.number ,
        card: item.card ,
        desc: item.desc ,
    });
};


class AddFrouderScreen extends Component {
    static navigationOptions = {
        title: 'Добавить мошенника',
    };

    constructor(props) {
        super(props);
        this.state = {
            froudName: '',
            froudNameLast: '',
            froudNumber: '',
            froudCreditCard: '',
            froudDescription: ''
        }
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
    hadlerCreditCardNumber = (val)=>{
        this.setState({
            froudCreditCard: val
        });
    };
    hadlerDescription = (val)=>{
        this.setState({
            froudDescription: val
        });
    };
    submitInformation = () => {
        addItem({
            'name': this.state.froudName,
            'lastname': this.state.froudNameLast,
            'number': this.state.froudNumber,
            'card': this.state.froudCreditCard,
            'desc': this.state.froudDescription});
        Alert.alert('Item saved successfully');
    };

    render(){
        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.form_titles}>
                    <Text style={styles.title}>Добавте подробную информацию о мошеннике.</Text>
                </View>
                <TextInput style={styles.input}
                           onChangeText={this.hadlerChangeName}
                           placeholder='Имя'
                           value={this.state.froudName}
                />
                <TextInput style={styles.input}
                           onChangeText={this.hadlerChangeNameLast}
                           placeholder='Фамилия'
                           value={this.state.froudNameLast}
                />
                <TextInput style={styles.input}
                           onChangeText={this.hadlerChangeNumber}
                           placeholder='Номер телефона'
                           value={this.state.froudNumber}
                />
                <TextInput style={styles.input}
                           onChangeText={this.hadlerCreditCardNumber}
                           placeholder='Номер кредитной карточки: '
                           value={this.state.froudCreditCard}
                />
                <TextInput style={styles.inputDescription}
                           onChangeText={this.hadlerDescription}
                           placeholder='Описание: '
                           value={this.state.froudDescription}
                           numberOfLines={4}
                           multiline={true}
                />
                <View style={styles.button}>
                    <Button
                        onPress={this.submitInformation}
                        title="Отправить информацию"
                        color="#5499C7"
                    />
                </View>
            </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#e8ebf4',
        paddingTop: 90,
        paddingBottom: 40,
    },
    title:{
        textAlign: 'center',
        color: '#554433',
        paddingBottom: 0,
    },
    input:{
        width: '70%',
        borderBottomColor: '#909497',
        borderBottomWidth: 2,
        color:  '#909497',
        textAlign: 'left',
    },
    form_titles:{
        paddingBottom: 30,
    },
    button:{
        paddingTop: 20,
        paddingBottom: 20,
    },
    inputDescription:{
        width: '70%',
        height: 150,
        borderBottomColor: '#909497',
        borderBottomWidth: 2,
        color:  '#909497',
        textAlign: 'left',

    }
});


export default AddFrouderScreen;