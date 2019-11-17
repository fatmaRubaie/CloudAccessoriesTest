import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {colors, fonts} from '../../config/styles';
import Content from '../Containers/Content';

/**
 * Text component
 * @param {object} props - component props.
 * @return {component}
 */

const Button = props => {
    const {children, ...rest} = props;
    return (

        <TouchableOpacity
            onPress={props.onPress}
            style={[styles.btn, {}, props.style]}>
            <Text style={[styles.text, {
                color: props.textColor,
                backgroundColor: props.color,
            }, props.textStyle]}
                  text={props.title}>{props.title}
            </Text>
            <ActivityIndicator
                animating={props.load|| false}
                size="large"
                color={colors.white}
                style={styles.indicator}
            />


        </TouchableOpacity>
    );


};

export default Button;
