import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';


export default StyleSheet.create({
  bar: {
     //height: 45,
    margin: 1,
    borderWidth: 1,
    borderColor: colors.grey0,
    flexDirection: 'row',
    // flex: 1,
    alignSelf:'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabName: {
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
    padding: 6
  },
  item: {

    flex: 1,
    //flexDirection: 'row',
    justifyContent: 'center',
alignItems:'center',
  },
  activeItem: {
    backgroundColor: colors.white,
    color: colors.orange,
    borderBottomColor:colors.orange,
    borderBottomWidth:2,
    fontSize: 14,
  }
})
