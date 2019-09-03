import React,{Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, SafeAreaView, NativeModules } from 'react-native';


class WelcomeScreen extends Component {
    constructor(props){
        super(props);
        this.state= {
            lang: ' nothing '
        }
    }
    componentDidMount (){
        this.translateText();
    }
    translateText = ()=>{
        const getCurrentLanguage = NativeModules.I18nManager.localeIdentifier;
        const translation_en = require("../localization/en.json");
        const translation_ru = require("../localization/ru.json");
        let curentLanguage= null;
        switch (getCurrentLanguage) {
            case 'en_US':
                console.log('My langiase is English');
                curentLanguage =translation_en ;
                break;
            case 'ru_RU' :
                console.log('Мой язык русский');
                curentLanguage =translation_ru ;
                break;
            case 'uk_UA':
                console.log('Моя пісня соловїна');
                curentLanguage =translation_ru ;
                break;
            default:
                curentLanguage =translation_en ;
        }
        console.log('My current language is : '+curentLanguage);
        this.setState({lang: curentLanguage});
        console.log(this.state.lang);
    };

    static navigationOptions = {
        header: null,
    };
    render(){
        return (
            <SafeAreaView style={styles.body}>
                <View style={styles.body}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('AddFrouder')}
                        style={styles.button}
                    >
                        <Text style={styles.textButton}>{this.state.lang.main_addFrouder}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Search')}
                        style={styles.button}
                    >
                        <Text  style={styles.textButton}>{this.state.lang.main_addFrouder}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() =>this.props.navigation.navigate('ListFrouder')}
                        style={styles.button}
                    >
                        <Text  style={styles.textButton}>{this.state.lang.main_listFrouder}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>this.props.navigation.navigate('AboutApp')}
                        style={styles.aboutus}
                    >
                        <Text  style={styles.textButton}>{this.state.lang.main_aboutApp}</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
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