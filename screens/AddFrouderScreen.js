import React,{Component} from 'react';
import {Text, View,StyleSheet, TextInput, Button, ScrollView} from 'react-native';


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
            froudDescription: '',
        }
    };
    hadlerChangeName = (val)=>{
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
    submitInformation = () =>{

    };
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.form_titles}>
                    <Text style={styles.title}>Добавте подробную информацию о мошеннике.</Text>
                </View>
                <TextInput style={styles.input}
                           onChangeText={this.hadlerChangeName}
                           placeholder='Имя'
                           value={this.state.frousadName}
                />
                <TextInput style={styles.input}
                           onChangeText={this.hadlerChangeNameLast}
                           placeholder='Фамилия'
                           value={this.state.frousadNameLast}
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
    },
    title:{
        textAlign: 'center',
        color: '#554433',
        paddingBottom: 0,
    },
    input:{
        width: 220,
        borderBottomColor: '#909497',
        borderBottomWidth: 2,
        color:  '#909497',
        textAlign: 'left',
    },
    form_titles:{
        paddingBottom: 30,
    },
    button:{
        marginTop: 20,
        marginBottom: 20,
    },
    inputDescription:{
        width: 220,
        height: 150,
        borderBottomColor: '#909497',
        borderBottomWidth: 2,
        color:  '#909497',
        textAlign: 'left',

    }
});


export default AddFrouderScreen;