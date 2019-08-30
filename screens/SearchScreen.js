import React,{Component} from 'react';
import {Text, View, ScrollView, Button, StyleSheet,TextInput, Alert} from 'react-native';
import {db} from '../firebase/config';
let itemsRef = db.ref('/items');

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
            items: {},
            filtredData:[],
        }
    };
    handlerInputSearch = (val)=>{
        this.setState({
            searchInfo: val
        });
        let dataa = [];
        itemsRef.on('value', snapshot => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({ items });
            // let item = items[1];
            // let line = item.card+' '+item.desc+' '+ item.firstname+' '+item.lastname+' '+ item.phone ;
            // console.log(this.state.items);
            // console.log(line);
            // console.log('exsist: '+line.includes('0834323773'));
            // console.log('Filstred list'+this.checkExistWord(items, '2222 2222 3333 4444'));
            // data.push(this.checkExistWord(items, this.state.searchInfo));
            dataa = this.checkExistWord(items, this.state.searchInfo);
            this.setState({filtredData: dataa});
            console.log('Start dataa A');
            console.log(dataa);
            console.log('End data');

        });
    };

    checkExistWord =(item,filtredWord)=>{
        let list = [];
        let includeWord = 0 ;
        let exsistWordsArray=[];
        for (let i= 0 ; item.length > i  ;i++){
            let line = item[i].card+' '+item[i].desc+' '+ item[i].firstname+' '+item[i].lastname+' '+ item[i].phone;
            if (line.includes(filtredWord)){
                exsistWordsArray.push(item[i]);
            };
            // list.push(line);
        };
        return exsistWordsArray;
    };
    componentDidMount() {


    };
    submitISearch= () =>{
        if (this.state.searchInfo != '') {

            this.props.navigation.navigate('FiltrFroud',{
                filtreddata: this.state.filtredData});
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