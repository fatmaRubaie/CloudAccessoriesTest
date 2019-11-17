import React, {Component} from 'react';
import {ScrollView, SafeAreaView, I18nManager, Text, View} from 'react-native';
import Container from '../../components/Containers/Container';
import Content from '../../components/Containers/Content';
import styles from './styles';
import {Item} from '../../components/Item/Item';
import Button from '../../components/Button/Button';
import {isRTL, strings} from '../../locales/i18n';
import I18n from '../../locales/i18n';

let mock = [
    {
        title_ar: 'اختبار رياكت نيتف',
        title_en: 'React Native Test',
        image: 'https://images.unsplash.com/photo-1499018658500-b21c72d7172b?ixlib=rb-1.2.1&w=1000&q=80',
    },
    {
        title_ar: 'اختبار رياكت نيتف',
        title_en: 'React Native Test',
        image: 'https://images.unsplash.com/photo-1499018658500-b21c72d7172b?ixlib=rb-1.2.1&w=1000&q=80',
    },
    {
        title_ar: 'اختبار رياكت نيتف',
        title_en: 'React Native Test',
        image: 'https://images.unsplash.com/photo-1499018658500-b21c72d7172b?ixlib=rb-1.2.1&w=1000&q=80',
    },
    {
        title_ar: 'اختبار رياكت نيتف',
        title_en: 'React Native Test',
        image: 'https://images.unsplash.com/photo-1499018658500-b21c72d7172b?ixlib=rb-1.2.1&w=1000&q=80',
    },
];

export default class Test extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
        };
    }

    renderItem = (item, index) => {
        return (<Item item={item}/>);
    };

    load = () => {
        let item = {
            title_ar: 'اختبار رياكت نيتف',
            title_en: 'React Native Test',
            image: 'https://images.unsplash.com/photo-1499018658500-b21c72d7172b?ixlib=rb-1.2.1&w=1000&q=80',
        };
        mock.push(item);
        this.setState({list: mock});
        console.log(this.state.list);
    };


    componentDidMount() {
        this.setState({list: mock});
        console.log(I18n.locale);
    }

    render() {
        return (
            <Container>
                <Content>
                    <Text style={styles.address}>Your Cloud Accessories {strings('test')}</Text>
                    <SafeAreaView style={styles.container}>
                        <ScrollView style={styles.scrollView}
                                    showsHorizontalScrollIndicator={false}
                                    showsVerticalScrollIndicator={false}
                                    contentContainerStyle={{flex: 1}}>
                            {
                                this.state.list.map((item, index) => this.renderItem({item, index}))
                            }
                            <View style={styles.btn}>
                                <Button title={strings('load_more')}
                                        onPress={() => this.load()}/>
                            </View>
                        </ScrollView>
                    </SafeAreaView>

                </Content>
            </Container>
        );
    }
}
