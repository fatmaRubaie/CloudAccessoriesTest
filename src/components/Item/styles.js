import React from 'react';
import {StyleSheet} from 'react-native';
import I18n from "../../locales/i18n";

export default StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignSelf:'center',
        marginHorizontal: 10
    },
    view: {
        flexDirection: 'row',
        height: 65,
        alignItems: I18n.locale === 'en'?'flex-end':'flex-start',
        backgroundColor: 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')',
        marginVertical: 5,

    },
    text: {
        marginHorizontal: 10,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'baseline',
        alignSelf:'center'
    },
});
