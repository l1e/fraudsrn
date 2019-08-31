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
            filtredData :[],
            itemsStatus:'Ничего не найденно.',
        };
    };
    //Filter Data by keywords.
    filtredDataByKeyWords =(item,filtredWord)=>{
        let filtredData=[];
        for (let i= 0 ; item.length > i  ;i++){
            //Transform Object to string for check exist words.
            let objToString = item[i].card+' '+item[i].desc+' '+ item[i].firstname+' '+item[i].lastname+' '+ item[i].phone;
            if (objToString.includes(filtredWord)){
                filtredData.push(item[i]);
            }
        }
        return filtredData;
    };
    componentDidMount() {
        //Get key words from search form.
        const { navigation } = this.props;
        const keyword = navigation.getParam('keyword', 'Keyword');
        let dataToRender = [];

        //Get data from database.
        itemsRef.on('value', snapshot => {
            let data = snapshot.val();
            let items = Object.values(data);
            dataToRender = this.filtredDataByKeyWords(items, keyword);
            this.setState({filtredData: dataToRender});
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
                            <Text style={styles.text_error}>{this.state.itemsStatus}</Text>
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
    text_error:{
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