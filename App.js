/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  StyleSheet,
} from 'react-native';


import WelcomeScreen from './screens/WelcomeScreen';
import AddFrouderScreen from './screens/AddFrouderScreen';
import SearchScreen from './screens/SearchScreen';
import ListFroudScreen from './screens/ListFroudScreen';
import FiltrFroudListScreen from './screens/FiltrFroudListScreen';
import AboutApp from './screens/AboutApp';
import  {createSwitchNavigator, createAppContainer, createStackNavigator} from 'react-navigation';


const AppSwitchNavigator = createSwitchNavigator({
  Welcome: {screen: WelcomeScreen}
},
    {
    navigationOptions :({navigation}) =>{
      const {routName} = navigation.state.routes[navigation.state.index];
      return{
        header: null,
        headerTitle: routName
      };
    }
});


const appStackNavigator = createStackNavigator({
  AppSwitchNavigator,
  Search:{screen:SearchScreen},
  AddFrouder: {screen: AddFrouderScreen},
  ListFrouder: {screen: ListFroudScreen},
  FiltrFroud: {screen:FiltrFroudListScreen},
  AboutApp: {screen:AboutApp},
});


const AppContainer = createAppContainer(appStackNavigator);


const App = () => {
  return (
      <Fragment>
                <AppContainer/>
      </Fragment>
  );
};

export default App;
