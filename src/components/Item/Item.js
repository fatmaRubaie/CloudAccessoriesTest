import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import I18n from '../../locales/i18n';
import Button from '../Button/Button';

export const Item = (props) => {
    console.log(I18n.locale  )
    console.log(I18n.locale === 'en' ? props.item['title_en'] : props.item['title_ar']);
    let x = I18n.locale === 'en' ? props.item['title_en'] : props.item['title_ar'];
    return (
        <View style={[styles.view,{
            width:props.type==='row'?335:150,
            height:props.type==='row'?80:160,
            flexDirection: props.type==='row'?'row':'column'}]}>
            <Image style={styles.image} source={{uri: props.item['image']}}/>
            <Text style={styles.text}>{x}</Text>

            <View style={styles.btn}>
                <Button title={'Delete'}
                        onPress={props.delete}/>
            </View>
        </View>
    );
};
