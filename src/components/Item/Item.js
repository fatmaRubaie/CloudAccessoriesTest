import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import I18n from '../../locales/i18n';

export const Item = (props) => {
    console.log(I18n.locale === 'en' ? props.item['item']['title_en'] : props.item['item']['title_ar']);
    let x = I18n.locale === 'en' ? props.item['item']['title_en'] : props.item['item']['title_ar'];
    return (
        <View style={styles.view}>
            <Image style={styles.image} source={{uri: props.item['item']['image']}}/>
            <Text style={styles.text}>{x}</Text>
        </View>
    );
};
