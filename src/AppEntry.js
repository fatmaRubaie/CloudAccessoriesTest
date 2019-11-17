import React,{Component} from 'react';
import AppNavigator from './Navigators/AppNavigator';


export default class AppEntry extends Component {
     constructor() {
        super();
        this.state = {
            rootPage: <AppNavigator/>,
            language: 'ar',
            user: null,
            connection_Status: '',

        };

    }


    render() {
        return (this.state.rootPage);
    }
}
