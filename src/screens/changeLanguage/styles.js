import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../config/styles';


export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },

    address: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary,
        textAlign: 'center',
        marginTop:100,
    },

    language: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height:50,
        marginTop: 20,
        marginHorizontal: 20
    },
    lang_btn:{
        borderRadius: 5,
        height: 65,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        width:180
    }
});
