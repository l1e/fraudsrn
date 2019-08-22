import React,{Component} from 'react';
import {Text, View, Button, StyleSheet,TextInput, Alert} from 'react-native';

import {db} from '../firebase/config';

let itemsRef = db.ref('/items');

class ListFroudScreen extends Component {
    static navigationOptions = {
        title: 'Список мошенников',
    };
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    };
    componentDidMount() {
        itemsRef.on('value', snapshot => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({ items });
            console.log('Hiii');
            // Alert(this.state.items);
        });
    }
    handlerInputSearch = (val)=>{
        this.setState({
            searchInfo: val
        });

    };
    submitISearch= () =>{
        this.props.navigation.navigate('AddFrouder')
    };
    render(){
        return (
            <View style={styles.body}>
                <View style={styles.frouder} >
                    <Text style={styles.frouder__text}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </Text>
                    <Text> Accusamus aliquam, aperiam assumenda cupiditate dolorem eaque excepturi non placeat. Alias aspernatur distinctio, dolores dolorum est fugit, illo.</Text>
                    <Text style={styles.frouder__additionalInformation}><Text> +380674853274 </Text> <Text> Иван Васильевич </Text>  </Text>
                </View>
                <View style={styles.frouder} >
                    <Text style={styles.frouder__text}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </Text>
                    <Text style={styles.frouder__description}> Accusamus aliquam, aperiam assumenda cupiditate dolorem eaque excepturi non placeat. Alias aspernatur distinctio, dolores dolorum est fugit, illo.</Text>
                    <Text style={styles.frouder__additionalInformation}><Text style={styles.frouder__phone}> +380674853274 </Text> <Text style={styles.frouder__personalInfo} > Иван Васильевич </Text>  </Text>
                </View>
                <Text>Результат:
                    {this.state.items.map((item,i) => <Text key={i}>{item.card}</Text>)}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body:{
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: '#e8ebf4',
        paddingTop: 10,
    },
    frouder:{
        width: '100%',
        backgroundColor: '#fff',
        marginTop: 5,
        marginBottom: 5,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    frouder__text:{
        fontWeight: 'bold'
    },
    frouder__additionalInformation:{
        fontStyle: 'italic'
    },
    frouder__phone:{

    },
    frouder__personalInfo:{

    },
    frouder__description:{

    },
});

export default ListFroudScreen