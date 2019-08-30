import React,{Component} from 'react';
import {Text, View, ScrollView, Button, StyleSheet,TextInput, Alert} from 'react-native';

let placeHolderColor= '#909497';
let inputText= '#25282b';

class SearchScreen extends Component {

    static navigationOptions = {
        title: 'Поиск мошенника',
    };

    constructor(props) {
        super(props);
        this.state = {
            searchInfo: '',
        }
    };
    handlerInputSearch = (val)=>{
        this.setState({
            searchInfo: val
        });
    };


    submitISearch= () =>{
        if (this.state.searchInfo != '') {
            this.props.navigation.navigate('FiltrFroud',{
                keyword: this.state.searchInfo});
            console.log('keyword:'+this.state.searchInfo);
        }else{
            Alert.alert("Ошибка","Введите информацию для поиска");
        }
        };
    render(){
        return (
            <ScrollView style={styles.body}>
                <View style={styles.content}>
                    <View style={styles.form_titles}>
                        <Text style={styles.title}>Введите информацию, которая известна о мошеннике.</Text>
                    </View>
                    <TextInput
                        style={styles.searchInput}
                        onChangeText={this.handlerInputSearch}
                        placeholder='Введите известную информацию о мошеннике'
                        placeholderTextColor={placeHolderColor}
                        numberOfLines={20}
                        value={this.state.searchInfo}
                        maxLength={20}
                    />
                    <Button
                        onPress={this.submitISearch}
                        title="Отправить информацию"
                        color="#5499C7"
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: '#e8ebf4',
        paddingTop: 60
    },
    content:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    form_titles:{
        paddingBottom: 40,
    },
    searchInput:{
        width: '90%',
        borderColor: '#909497',
        borderWidth: 1,
        color:  inputText,
        textAlign: 'center',
        marginBottom: 20,

    },
    button:{
        marginTop: 20,
    },
    title:{
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SearchScreen