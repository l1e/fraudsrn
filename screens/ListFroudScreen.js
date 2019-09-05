import React,{Component} from 'react';
import {Text, View, StyleSheet, ScrollView, SafeAreaView, ActivityIndicator} from 'react-native';

import Itemfroud from '../component/Itemfroud';

import {db} from '../firebase/config';
import Localization from "../component/Localization";
let itemsRef = db.ref('/items');


class ListFroudScreen extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            title: Localization().filtredList_title,
        };
    };
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            itemsStatus: '',
            lang: Localization(),
        }
    };
    componentDidMount() {
        this.noContent();
        itemsRef.on('value', snapshot => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({ items });
        });

    };
    noContent =() =>{
        setTimeout(()=>{this.setState({itemsStatus: this.state.lang.listfrouder_error})},10000)
    };
    render(){
        return (
            <SafeAreaView style={styles.body}>
                <ScrollView style={styles.fill} contentContainerStyle={{flexGrow: 1}}>
                    <View style={styles.content}>
                        {this.state.items.length > 0 ? (
                            <Itemfroud items={this.state.items} />
                        ) : (
                            <View style={styles.loadingInner}>
                                {this.state.itemsStatus.length > 2 ? <Text>{this.state.itemsStatus}</Text>: <ActivityIndicator size="large" color="#0000ff" />}
                            </View>
                        )}
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: '#e8ebf4',
        paddingTop: 10,
        paddingBottom: 0,
    },
    content:{
        flex: 1,
        width: '100%',
        height: '100%',
        paddingTop: 10,
        paddingBottom: 20,
    },
    loadingInner:{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fill:{
        flex: 1,
    }
});

export default ListFroudScreen