import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'


class FiltrFroudListScreen extends Component {
    static navigationOptions = {
        title: 'Найдено мошенников',
    };
    render(){
        return(
            <View style={Styles.body}>
                <Text> Извините, данный функионал появится в ближайшем будущем.</Text>
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