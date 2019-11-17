import React, {Component} from 'react';
import {ScrollView, SafeAreaView, I18nManager, Text, View} from 'react-native';
import Container from '../../components/Containers/Container';
import Content from '../../components/Containers/Content';
import styles from './styles';
import {Item} from '../../components/Item/Item';
import Button from '../../components/Button/Button';
import {isRTL, strings} from '../../locales/i18n';
import I18n from '../../locales/i18n';


export default class ChangeLanguage extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
        };
    }


    en_lang = () => {
        I18n.locale = 'en';
        I18nManager.forceRTL(!isRTL);
        this.props.navigation.replace('Test');
    };

    ar_lang = () => {
        I18n.locale = 'ar';
        I18nManager.forceRTL(isRTL);
        this.props.navigation.replace('Test');

    };

    render() {
        return (
            <Container>
                <Content>
                    <Text style={styles.address}>Your Cloud Accessories {strings('test')}</Text>
                    <Text style={styles.address}> {strings('select_language')}</Text>
                    <View style={styles.language}>
                        <View style={styles.lang_btn}>
                            <Button title={'English'}
                                    onPress={() => this.en_lang()}/>
                        </View>
                        <View style={styles.lang_btn}>
                            <Button title={'العربية'}
                                    onPress={() => this.ar_lang()}/>
                        </View>
                    </View>

                </Content>
            </Container>
        );
    }
}
