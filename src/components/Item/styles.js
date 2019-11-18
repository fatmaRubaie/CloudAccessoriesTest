import React from 'react';
import {StyleSheet} from 'react-native';
import I18n from '../../locales/i18n';
import {colors} from '../../config/styles';

export default StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignSelf: 'center',
        marginHorizontal: 10,
    },
    view: {

        alignItems: I18n.locale === 'en' ? 'flex-end' : 'flex-start',
        backgroundColor: 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')',
        marginVertical: 5,
        marginHorizontal: 10,
        padding: 5,
        height:160,
    },
    text: {
        marginHorizontal: 10,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'baseline',
        alignSelf: 'center',
    },
    btn:{
        borderRadius: 5,
        height: 30,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        width:80,
        alignSelf:'center'
    }
});
