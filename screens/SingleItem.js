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
        return(
            <SafeAreaView style={styles.body}>
                <ScrollView style={styles.fill} contentContainerStyle={{flexGrow: 1}}>
                    <View style={styles.content}>
                        <View style={styles.names}>
                            <Text style={styles.part}>{firstName}</Text>
                            <Text style={styles.part}>{lastName}</Text>
                        </View>
                        <View style={styles.contacts}>
                            <Text style={styles.part}>{phone}</Text>
                            <Text style={styles.part}>{card}</Text>
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
    names:{
        width: "100%",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-around"
    },
    contacts:{
        width: "100%",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-around"
    },
    part:{
        width: '50%'
    },
    title:{
        marginTop: 10,
        marginBottom: 10
    },
});

export default SingleItem;


