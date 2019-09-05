import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, ActivityIndicator} from 'react-native'

import Localization from "../component/Localization";

import Itemfroud from '../component/Itemfroud';

import {db} from '../firebase/config';
let itemsRef = db.ref('/items');



class FiltrFroudListScreen extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            title: Localization().listfrouder_title,
        };
    };
    constructor(props) {
        super(props);
        this.state = {
            filtredData :[],
            lang: Localization(),
            itemsStatus: '',
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
        this.noContent();
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
    noContent =() =>{
        setTimeout(()=>{this.setState({itemsStatus: this.state.lang.filtredList_nothintofound})},4000)
    };
    searchAgain =()=>{
        return(
        <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={styles.button}
        >
            <Text  style={styles.textButton}>{this.state.lang.filtredList_tryagain}</Text>
        </TouchableOpacity>
        )
    };

    render(){
        return(
            <SafeAreaView style={styles.body}>
                <ScrollView contentContainerStyle={{flexGrow: 1}}>
                    <View style={styles.content} style={[(this.state.filtredData.length) > 0  ? styles.content : styles.contentExist]}>
                        {this.state.filtredData.length > 0 ? (
                            <Itemfroud items={this.state.filtredData} />
                        ) : (
                            <View style={styles.loadingInner}>
                                {this.state.itemsStatus.length > 2 ?<Text style={styles.text_error}>{this.state.itemsStatus}</Text>  :<ActivityIndicator size="large" color="#0000ff" />}
                                {this.state.itemsStatus.length > 2 ? this.searchAgain(): console.log(' ??? ')  }

                                {/*<Text style={styles.text_error}>{this.state.itemsStatus}</Text>*/}
                            </View>
                            )}
                    </View>
                </ScrollView>
            </SafeAreaView>

        )
    }
}
const styles = StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: '#e8ebf4',
    },
    content:{
        paddingTop: 10,
        paddingBottom: 20,
    },
    contentExist:{
        flex: 1,
        width: '100%',
        height: '100%',
        paddingTop: 10,
        paddingBottom: 20,
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
    loadingInner:{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
});
export default FiltrFroudListScreen;