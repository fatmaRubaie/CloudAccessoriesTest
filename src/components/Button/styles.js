import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../config/styles';

const deviceHeight = Dimensions.get('window').height;

/**
 * Creates a StyleSheet style reference from the given object.
 * @param {object} style - component styles object.
 * @return {object}
 */
export default StyleSheet.create({
    btn: {
        flex: 1,
        flexDirection:'row',
        alignItems:'center'

    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        //marginHorizontal: 5,

        color:colors.white

    },

    indicator:{
        position: 'absolute',
        zIndex: 0,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        height: 50,
        right:60

    }
});
