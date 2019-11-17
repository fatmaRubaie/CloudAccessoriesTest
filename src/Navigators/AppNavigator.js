import {createAppContainer} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import changeLanguage from '../screens/changeLanguage/changeLanguage';
import Test from '../screens/Test/Test';

const AppNavigator = createStackNavigator(
    {
        changeLanguage: {
            screen: changeLanguage,
            navigationOption: {
                title: "changeLanguage",
                header: null,

            }
        },
        Test: {
            screen: Test,
            navigationOption: {
                title: "Test",
                header: null,

            }
        },


    },
    {

        initialRouteName: "changeLanguage",
        headerMode:'none',

    }
);
export default createAppContainer(AppNavigator);

