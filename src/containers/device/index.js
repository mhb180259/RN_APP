/*eslint-disable*/
import React, {
  Component,
} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import {
  connect,
} from 'react-redux';
import styles from './style';
import {
  IconFont
} from '../../components';
import {
  screenWidth,
} from '../../config/constant.js';

const videoList = [
  "../../assets/img/video.png",
  "../../assets/img/video.png",
  "../../assets/img/video.png",
  "../../assets/img/video.png",
  "../../assets/img/video.png",
];

@connect(state => ({
  base: state.base,
}))
export default class Mo extends Component {
  static navigationOptions = {
    headerTitle: 'Device',
    // headerRight: (
    //   <IconFont name="tips" size={16} style={{color: '#fff', marginRight: 10}}/>
    // ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.base.show}</Text>
        <FlatList
          data={videoList}
          renderItem={this._renderRow}
          keyExtractor={(item) => item}
        />
      </View>
    );
  }
  _renderRow = (item) => {
    let url = item.item;
    return (
      <TouchableHighlight  underlayColor={'#dcdcdc'} onPress={() => {this.itemSelected(url)}}>
        <View style={styles.video}>
          <Image resizeMode="stretch" style={{height: 171, width: screenWidth - 20}} source={require('../../assets/img/video.png')}/>
          <View style={styles.intro}>
            <Text style={{fontSize: 16, marginLeft: 15}}>Ranger-278C</Text>
            <Text style={{fontSize: 10, marginLeft: 9, color: '#696969'}}>2019/03/20 11:40</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  };
  itemSelected = () => {
    this.props.navigation.navigate('VideoDetails', {
      title: 'Cue-47D9000',
    });
  }
}