import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'

import Itemfroud from '../component/Itemfroud';

class FiltrFroudListScreen extends Component {
    static navigationOptions = {
        title: 'Найдено мошенников',
    };
    render(){
        // const { navigation } = this.props;
        // const filtreddata = navigation.getParam('filtreddata', 'Big data.');
        // console.log('Helllo 1');
        // console.log(filtreddata);
        // console.log('Helllo 1');

        return(
            <View style={Styles.body}>
                {/*{this.state.items.length > 0 ? (*/}
                    {/*<Itemfroud items={filtreddata} />*/}
                {/*) : (*/}
                    {/*<Text>{this.state.itemsStatus}</Text>*/}
                {/*)}*/}
            </View>
        )
    }
}
const Styles= StyleSheet.create({
   body:{
      paddingTop: 30,
       paddingLeft: 10,
       paddingRight: 10,
   } ,
});
export default FiltrFroudListScreen;