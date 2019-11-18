import React, {Component} from 'react';
import {ScrollView, SafeAreaView, I18nManager, RefreshControl, View,  Animated} from 'react-native';
import Container from '../../components/Containers/Container';
import Content from '../../components/Containers/Content';
import styles from './styles';
import {Item} from '../../components/Item/Item';
import Button from '../../components/Button/Button';
import {isRTL, strings} from '../../locales/i18n';
import I18n from '../../locales/i18n';
import RoundedTabs from '../../components/RoundedTabs/RoundedTabs';
import PTRView from 'react-native-pull-to-refresh';

let mock0 = [
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
let mock = [

   {
        title_ar: 'اختبار رياكت نيتف',
        title_en: 'React Native Test',
        image: 'https://images.unsplash.com/photo-1499018658500-b21c72d7172b?ixlib=rb-1.2.1&w=1000&q=80',
    },{
        title_ar: 'اختبار رياكت نيتف',
        title_en: 'React Native Test',
        image: 'https://images.unsplash.com/photo-1499018658500-b21c72d7172b?ixlib=rb-1.2.1&w=1000&q=80',
    },{
        title_ar: 'اختبار رياكت نيتف',
        title_en: 'React Native Test',
        image: 'https://images.unsplash.com/photo-1499018658500-b21c72d7172b?ixlib=rb-1.2.1&w=1000&q=80',
    },{
        title_ar: 'اختبار رياكت نيتف',
        title_en: 'React Native Test',
        image: 'https://images.unsplash.com/photo-1499018658500-b21c72d7172b?ixlib=rb-1.2.1&w=1000&q=80',
    },{
        title_ar: 'اختبار رياكت نيتف',
        title_en: 'React Native Test',
        image: 'https://images.unsplash.com/photo-1499018658500-b21c72d7172b?ixlib=rb-1.2.1&w=1000&q=80',
    },{
        title_ar: 'اختبار رياكت نيتف',
        title_en: 'React Native Test',
        image: 'https://images.unsplash.com/photo-1499018658500-b21c72d7172b?ixlib=rb-1.2.1&w=1000&q=80',
    },{
        title_ar: 'اختبار رياكت نيتف',
        title_en: 'React Native Test',
        image: 'https://images.unsplash.com/photo-1499018658500-b21c72d7172b?ixlib=rb-1.2.1&w=1000&q=80',
    },{
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
            scrollY: new Animated.Value(0),
            loadMore: false,
        };
        this._refresh = this._refresh.bind(this);
    }

    _refresh () {
        // you must return Promise everytime
        // let item = {
        //     title_ar: 'اختبار رياكت نيتف',
        //     title_en: 'React Native Test',
        //     image: 'https://images.unsplash.com/photo-1499018658500-b21c72d7172b?ixlib=rb-1.2.1&w=1000&q=80',
        // };
        // mock.push(item);
        return new Promise((resolve) => {
            setTimeout(()=>{
                // some refresh process should come here
                this.setState({list: mock0});
                resolve();
            }, 2000)
        })
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
        this.setState({loadMore: false})
    };


    componentDidMount() {
        this.setState({list: mock});
        //console.log(I18n.locale);
    }

    isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
        const paddingToBottom = 50
        console.log(layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom)
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom
    }
    loadMoreData = async () => {
        const {loadMore} = this.state
        if (loadMore) {

        }
        this.setState({loadMore: true})
        this.load()
        /*loading - set loadMore = false when done*/
    }
    _onScroll(event) {
        let item = {
            title_ar: 'اختبار رياكت نيتف',
            title_en: 'React Native Test',
            image: 'https://images.unsplash.com/photo-1499018658500-b21c72d7172b?ixlib=rb-1.2.1&w=1000&q=80',
        };
        if(this.state.loadMore){
            return;
        }
        let y = event.nativeEvent.contentOffset.y;
        let height = event.nativeEvent.layoutMeasurement.height;
        let contentHeight = event.nativeEvent.contentSize.height;
        console.log('offsetY-->' + y);
        console.log('height-->' + height);
        console.log('contentHeight-->' + contentHeight);
        if(y+height>=contentHeight-20){
            this.setState({
                loadMore:true
            });
           // this.load()
            //alert('end')
            this.setState({list: []});
            mock.push(item);
            this.setState({list: mock});
        }
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
            <PTRView onRefresh={this._refresh} >
            <Container>
                <Content>
                     <RoundedTabs
                        tab={true}
                        list={mockTabs}
                        onChange={(i) => {
                            this.setState({selectedTab: i.key});
                            if(i.key === 1 ){
                                this.setState({type:'column'})
                            }else{
                                this.setState({type:'row'})
                            }
                        }}
                        selected={this.state.selectedTab}
                    />
                        {this.state.selectedTab === 2 ?

                            <View style={[styles.all]}>
                                {  items}
                            </View>
                             :
                            <ScrollView style={[styles.scrollView]}
                                        horizontal={this.state.selectedTab === 1 ? true : false}
                                        onScroll={this._onScroll.bind(this)}
                                        scrollEventThrottle={1}
                                        refreshControl={
                                            <RefreshControl
                                                onRefresh={this.load.bind(this)}
                                                tintColor="#ff0000"
                                                title="Loading..."
                                                titleColor="#00ff00"
                                                colors={['#ff0000', '#00ff00', '#0000ff']}
                                                progressBackgroundColor="#ffffff"
                                            />
                                        }
                            >

                                {
                                    this.state.list.map((item, index) => this.renderItem({item, index}))

                                }
                            </ScrollView>

                        }
                    {/*<View style={styles.btn}>*/}
                    {/*    <Button title={strings('load_more')}*/}
                    {/*            onPress={() => this.load()}/>*/}
                    {/*</View>*/}

                </Content>
            </Container>
            </PTRView>
        );
    }
}
