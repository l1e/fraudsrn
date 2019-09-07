import React ,{Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Localization from "../component/Localization";

class SingleItem extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            title: Localization().singleitem_title,
        };
    };
    render(){
        const { navigation } = this.props;
        const shortDesc = navigation.getParam('shortDesc','some value');
        const description = navigation.getParam('description','some value');
        const phone = navigation.getParam('phone','some value');
        const firstName = navigation.getParam('firstName','some value');
        const lastName = navigation.getParam('lastName','some value');
        const card = navigation.getParam('card','some value');
        const url = navigation.getParam('url','some value');
        return(
            <SafeAreaView style={styles.body}>
                <ScrollView style={styles.fill} contentContainerStyle={{flexGrow: 1}}>
                    <View style={styles.content}>
                        <View style={styles.persDetails}>
                            <Text style={styles.persDetails__item}>
                                <Text style={styles.persDetails__label}>Имя: </Text>
                                <Text style={styles.persDetails__text}>{firstName}</Text>
                            </Text>
                            <Text style={styles.persDetails__item}>
                                <Text style={styles.persDetails__label}>Фамилия: </Text>
                                <Text style={styles.persDetails__text}>{lastName}</Text>
                            </Text>
                            <Text style={styles.persDetails__item}>
                                <Text style={styles.persDetails__label}>Номер телефона: </Text>
                                <Text style={styles.persDetails__text}>{phone}</Text>
                            </Text>
                            <Text style={styles.persDetails__item}>
                                <Text style={styles.persDetails__label}>Номер карты: </Text>
                                <Text style={styles.persDetails__text}>{card}</Text>
                            </Text>
                            <Text style={styles.persDetails__item}>
                                <Text style={styles.persDetails__label}>Ссылка на мошенника: </Text>
                                <Text style={styles.persDetails__text}>{url}</Text>
                            </Text>
                        </View>
                        <Text style={styles.title}>{shortDesc}</Text>
                        <Text>{description}</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const  styles= StyleSheet.create({
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
        paddingLeft: 10,
        paddingRight: 10,

    },
    persDetails:{
        width: "100%",
        flexDirection: "column",
        alignItems: 'flex-start',
        justifyContent: "flex-start",
        marginBottom: 20,
    },
    persDetails__item:{
        paddingBottom: 10,
    },
    persDetails__label:{
        color: '#272727'
    },
    persDetails__text:{

    },
    title:{
        marginBottom: 10,
        fontWeight: 'bold'
    }
});

export default SingleItem;


