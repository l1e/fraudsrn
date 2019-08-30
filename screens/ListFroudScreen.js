import React,{Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Itemfroud from '../component/Itemfroud';

import {db} from '../firebase/config';

let itemsRef = db.ref('/items');

class ListFroudScreen extends Component {
    static navigationOptions = {
        title: 'Список мошенников',
    };
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            itemsStatus: 'No items'
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
            // console.log(this.checkExistWord(items, '2222 2222 3333 4444'));

        });

    };

    render(){
        return (
            <ScrollView style={styles.body}>
                <View style={styles.content}>
                    {this.state.items.length > 0 ? (
                        <Itemfroud items={this.state.items} />
                    ) : (
                        <Text>{this.state.itemsStatus}</Text>
                    )}
                </View>
            </ScrollView>
        );
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
    }
});

export default ListFroudScreen