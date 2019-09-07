import React,{Component} from 'react';
import {Text, View, ScrollView, Button, StyleSheet,TextInput, Alert, SafeAreaView} from 'react-native';
import Localization from "../component/Localization";

let placeHolderColor= '#909497';
let inputText= '#25282b';

class SearchScreen extends Component {

    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            title: Localization().search_title ,
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            searchInfo: '',
            lang: Localization(),
        }
    };

    handlerInputSearch = (val)=>{
        this.setState({
            searchInfo: val
        });
    };
    clearInput= ()=>{
        this.setState({searchInfo: ''})
    };

    submitISearch= () =>{
        if (this.state.searchInfo != '') {
            this.props.navigation.navigate('FiltrFroud',{
                keyword: this.state.searchInfo});
                this.clearInput();
        }else{
            Alert.alert(this.state.lang.search_error,this.state.lang.search_error_desc);
        }
    };
    render(){
        return (
            <SafeAreaView style={styles.body}>
                <ScrollView >
                    <View style={styles.content}>
                        <View style={styles.form_titles}>
                            <Text style={styles.title}>{this.state.lang.search_desc}</Text>
                        </View>
                        <TextInput
                            style={styles.searchInput}
                            onChangeText={this.handlerInputSearch}
                            placeholder={this.state.lang.search_placeholder}
                            placeholderTextColor={placeHolderColor}
                            numberOfLines={20}
                            value={this.state.searchInfo}
                            maxLength={20}
                        />
                        <Button
                            onPress={this.submitISearch}
                            title={this.state.lang.search_button}
                            color="#5499C7"
                        />
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
        paddingTop: 60,
        paddingBottom: 30
    },
    content:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    form_titles:{
        paddingBottom: 40,
    },
    searchInput:{
        width: '90%',
        borderColor: '#909497',
        borderWidth: 1,
        color:  inputText,
        textAlign: 'center',
        marginBottom: 20,

    },
    button:{
        marginTop: 20,
        marginBottom: 20,
    },
    title:{
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SearchScreen