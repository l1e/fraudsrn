import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import {db} from '../firebase/config';
let itemsRef = db.ref('/items');

import Itemfroud from '../component/Itemfroud';

class FiltrFroudListScreen extends Component {
    static navigationOptions = {
        title: 'Найдено мошенников',
    };
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            filtredData :[],
            itemsStatus:'Ничего не найденно.',
        }
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
        const { navigation } = this.props;
        const keyword = navigation.getParam('keyword', 'Keyword');

        console.log('Helllo 1');
        console.log(keyword);
        console.log('Helllo 1');
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
            dataa = this.checkExistWord(items, keyword);
            this.setState({filtredData: dataa});
            console.log('Filtred data START');
            console.log(this.state.filtredData);
            console.log('Filtred data END');

        });
    }

    render(){
        return(
            <ScrollView style={styles.body}>
                <View style={styles.content}>
                    {this.state.filtredData.length > 0 ? (
                        <Itemfroud items={this.state.filtredData} />
                    ) : (
                        <View>
                            <Text style={styles.nothing}>{this.state.itemsStatus}</Text>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.goBack()}
                                style={styles.button}
                            >
                                <Text  style={styles.textButton}>Ввести данные еще раз.</Text>
                            </TouchableOpacity>
                        </View>
                        )}
                </View>
            </ScrollView>

        )
    }
}
const styles = StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: '#e8ebf4',
        paddingTop: 10,
        paddingBottom: 50,
    },
    content:{
        paddingTop: 10,
        paddingBottom: 30,
    },
    nothing:{
        textAlign: 'center',
    },
    button:{
        textAlign: 'center',
        borderColor:  '#808080',
        borderWidth: 1,
        marginTop: 20,
        backgroundColor: '#E6E6FA',
        paddingTop: 10,
        paddingBottom: 10,
    },
    textButton:{
      textAlign: 'center',
    },
});
export default FiltrFroudListScreen;