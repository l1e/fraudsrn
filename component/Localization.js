import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, SafeAreaView, NativeModules } from 'react-native';

export default Localization = ()=>{
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
    return curentLanguage;
};