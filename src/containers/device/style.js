import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    padding: 10,
    backgroundColor: '#F7F7F7',
  },
  video: {
    height: 206,
    backgroundColor: '#fff',
    borderRadius: 7,
    marginBottom: 5,
  },
  intro: {
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
  },
  videoContainer: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  videoTop: {
    height: 242,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 9,
  },
  videoBottom: {
    flex: 1,
    backgroundColor: '#fff',
  },
});