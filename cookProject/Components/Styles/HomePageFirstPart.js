import {StyleSheet} from 'react-native';
import {Colors} from '../Colors';
export const Styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    opacity: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  title1: {
    fontSize: 38,
    fontStyle: 'normal',
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.orange,
  },
  title2: {
    fontSize: 35,
    fontStyle: 'normal',
    textAlign: 'center',
    fontWeight: '230',
    color: Colors.white,
  },
  titleView: {
    // backgroundColor: 'red',
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'center',
    marginTop: 90,
  },
  bodyText: {
    margingTop: 20,
    padding: 10,
    fontSize: 18,
    fontStyle: 'normal',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: '150',
    color: Colors.white,
  },
  button: {
    // backgroundColor: 'red',
    // flex: 1,
    height: 48,
    width: '50%',
    // paddingHorizontal: 90,
    paddingVertical: 12,
    borderRadius: 20,
    // justifyContent: 'flex-end',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    // marginHorizontal: 80,
    position: 'absolute',
    bottom: 12,
  },

  buttonText: {
    fontSize: 16,
    color: Colors.black,
  },
});
