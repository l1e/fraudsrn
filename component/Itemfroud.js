import React, { Component } from 'react';
import { View, Text, StyleSheet , Alert, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

class Itemfroud extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
        maxSymbol: PropTypes.number.isRequired
    };
    cutLong=(item,characterMax)=>{
        let cutItem = null ;
        let addToEnd = '...';
        if (item.length > characterMax){
            cutItem = item.slice(0, characterMax);
            cutItem = cutItem.concat(addToEnd);
        }else{
            cutItem= item;
        }
        return cutItem;
    };
    render() {
        return (

                <View style={styles.itemsList}>
                    {this.props.items.map((item, index) => {
                        return (
                            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('SingleItem',{
                                shortDesc:item.shortdesc,
                                description:item.desc,
                                phone:item.phone,
                                firstName:item.firstname,
                                lastName:item.lastname,
                                card:item.card,
                                url:item.url,
                            })}}>
                                <View key={index} style={styles.frouder} >
                                    <Text style={styles.frouder__text}> {item.shortdesc}</Text>
                                    <Text  ellipsizeMode={'tail'} style={styles.frouder__description}>{this.cutLong(item.desc, this.props.maxSymbol)}</Text>
                                    <View style={styles.frouder__additionalInformation}>
                                        <Text style={styles.frouder__phone}>{item.phone}</Text>
                                        <Text style={styles.frouder__personalInfo} >{item.firstname+'\b'}{item.lastname} </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
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


export default withNavigation(Itemfroud);