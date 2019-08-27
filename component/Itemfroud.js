import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class itemfroud extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    };
    render() {
        return (
            <View style={styles.itemsList}>
                {this.props.items.map((item, index) => {
                    return (
                        <View key={index} style={styles.frouder} >
                            <Text style={styles.frouder__text}>{item.shortdesc}</Text>
                            <Text  ellipsizeMode={'tail'} style={styles.frouder__description}>{item.desc}</Text>
                            <View style={styles.frouder__additionalInformation}>
                                <Text style={styles.frouder__phone}>{item.phone}</Text>
                                <Text style={styles.frouder__personalInfo} >{item.firstname+'\t'}{item.lastname} </Text>
                            </View>
                        </View>
                    );
                })}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    itemsList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    itemtext: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
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
        flex: 1,
        fontStyle: 'italic',
        paddingTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    frouder__phone:{
        textAlign: 'left',
    },
    frouder__personalInfo:{
        textAlign: 'right',
    },
    frouder__description:{
        paddingTop: 5,
    },
});
