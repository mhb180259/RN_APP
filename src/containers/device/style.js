import {
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  screenWidth,
  Bg,
  Blue,
} from '../../config/constant.js';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    padding: 10,
    backgroundColor: Bg,
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
    backgroundColor: Bg,
  },
  videoHeader: {
    width: screenWidth,
    backgroundColor: Blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoTop: {
    height: 242,
    paddingTop: 10,
  },
  videoBottom: {
    flex: 1,
    backgroundColor: '#fff',
  },
});