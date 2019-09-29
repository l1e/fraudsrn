import React,{Component} from 'react';
import {Text, View, ScrollView, Button, StyleSheet,TextInput, Alert} from 'react-native';
import Localization from "../component/Localization";

import MapView, { Marker, ProviderPropType } from 'react-native-maps';

class MapScreen extends Component {

    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            title: 'Map' ,
        };
    };

    render(){
        return (
            <View style={styles.content}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 50.421747,
                        longitude: 30.553164,
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.0221,
                    }}
                >
                    <MapView.Marker
                        title="OLX Office"
                        description="OLX.ua office is located on the IQ business center."
                        coordinate={{
                            latitude: 50.421747,
                            longitude: 30.553164,
                        }}
                    />
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content:{
        flex: 1,
        backgroundColor: '#e8ebf4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        textAlign: 'center',
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

export default MapScreen;
