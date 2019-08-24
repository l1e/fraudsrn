import React,{Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';



class WelcomeScreen extends Component {
    static navigationOptions = {
        header: null,
    };
    render(){
        return (
            <View style={styles.body}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('AddFrouder')}
                    style={styles.button}
                >
                    <Text style={styles.textButton}>Добавить мошенника</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Search')}
                    style={styles.button}
                >
                    <Text  style={styles.textButton}>Поиск мошенника</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() =>this.props.navigation.navigate('ListFrouder')}
                    style={styles.button}
                >
                    <Text  style={styles.textButton}>Список мошенников</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() =>this.props.navigation.navigate('AboutApp')}
                    style={styles.aboutus}
                >
                    <Text  style={styles.textButton}>О приложении</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
   body:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e8ebf4',
   },
    button:{
       flex:4,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000000',
        backgroundColor: '#7478a9',
        margin: 4
    },
    aboutus:{
        flex:1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000000',
        backgroundColor: '#7478a9',
        margin: 4
    },
    textButton:{
    },

});

export default WelcomeScreen;