import React, {Component} from 'react';
import {ScrollView, SafeAreaView, I18nManager, Text, View} from 'react-native';
import Container from '../../components/Containers/Container';
import Content from '../../components/Containers/Content';
import styles from './styles';
import {Item} from '../../components/Item/Item';
import Button from '../../components/Button/Button';
import {isRTL, strings} from '../../locales/i18n';
import I18n from '../../locales/i18n';
import RoundedTabs from '../../components/RoundedTabs/RoundedTabs';

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
const mockTabs = [
    {
        key: 0,
        label: strings('row'),
    },
    {
        key: 1,
        label: strings('column'),
    },
    {
        key: 2,
        label: strings('grid'),
    },

];
export default class Test extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            type: 'row',
            selectedTab: 0,

        };
    }

    delete_item = (index) => {
        mock.splice(index, 1);
        this.setState({list: mock});
        console.log(this.state.list);
    };

    renderItem = (item, index) => {
        return (<Item item={item['item']}
                      type={this.state.type}
                      delete={() => this.delete_item(index)}
        />);
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
        let items = [];
        for (let i = 0; i < mock.length; i++) {
            console.log(mock[i])
            items.push(
                <Item item={mock[i]}
                      delete={() => this.delete_item(index)}
                />
            );
        }
        return (
            <Container>
                <Content>
                    <Text style={styles.address}>Your Cloud Accessories {strings('test')}</Text>
                    <Text style={styles.address}>Your Cloud Accessories {strings('style')}</Text>
                    <RoundedTabs
                        tab={true}
                        list={mockTabs}
                        onChange={(i) => {
                            this.setState({selectedTab: i.key});
                        }}
                        selected={this.state.selectedTab}
                    />
                    <View style={[styles.view, {height: this.state.type === 'column' ? 200 : '80%'}]}>
                        {this.state.selectedTab === 2 ?

                            <View style={[styles.all]}>
                                {  items}
                            </View>
                             :
                            <ScrollView style={[styles.scrollView]}
                                        horizontal={this.state.selectedTab === 1 ? true : false}
                            >

                                {
                                    this.state.list.map((item, index) => this.renderItem({item, index}))

                                }
                            </ScrollView>

                        }
                    </View>
                    <View style={styles.btn}>
                        <Button title={strings('load_more')}
                                onPress={() => this.load()}/>
                    </View>

                </Content>
            </Container>
        );
    }
}
