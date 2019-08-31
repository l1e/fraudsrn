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
            itemsStatus: 'Ничего не найденно.'
        }
    };
    componentDidMount() {
        itemsRef.on('value', snapshot => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({ items });
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