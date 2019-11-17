import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../config/styles';


export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
    scrollView: {
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
    },
    address: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary,
        textAlign: 'center',
        marginVertical:20,
    },
    btn: {
        borderRadius: 5,
        height: 65,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    language: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height:50,
        marginVertical: 20,
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
