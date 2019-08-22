import React,{Component} from 'react';
import {Text, View, Button, StyleSheet,TextInput} from 'react-native';

class SearchScreen extends Component {
    static navigationOptions = {
        title: 'Поиск мошенника',
    };
    constructor(props) {
        super(props);
        this.state = {
            searchInfo: ''
        }
    };

    handlerInputSearch = (val)=>{
        this.setState({
            searchInfo: val
        });

    };
    submitISearch= () =>{
        this.props.navigation.navigate('ListFrouder')
    };
    render(){
        return (
            <View style={styles.body}>
                <TextInput
                onChangeText={()=>{this.handlerInputSearch}}
                placeholder='Введите известную информацию о мошеннике'
                style={styles.searchInput}
                numberOfLines={20}
                multiline={true}
                />
                <Button
                    onPress={this.submitISearch}
                    title="Отправить информацию"
                    color="#5499C7"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8ebf4',
    },
    searchInput:{
        width: '90%',
        borderColor: '#909497',
        borderWidth: 1,
        color:  '#909497',
        textAlign: 'left',
        marginBottom: 20,
    },
    button:{
        marginTop: 20,
    },
});

export default SearchScreen