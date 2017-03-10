import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';


export default class MovieListItem extends Component {
  render() {
    const {title, year, poster} = this.props;
    return (
      <TouchableOpacity
          onPress={this.props.handlePress}
          style={{flexDirection: 'row', width: "96%"}}>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: poster}}
        />
        <View style={{flexDirection: 'column', marginLeft: 5}}>
          <Text style={{fontSize:30}}>{title}</Text>
          <Text style={{fontSize:20}}>{year}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
