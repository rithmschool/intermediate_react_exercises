import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

export default class MovieListItem extends Component {
  render() {

    // ES2015 object deconstruction
    // Same as const title = this.props.title;
    // Same as const year = this.props.year;
    // Same as const post = this.props.poster;
    const {title, year, poster} = this.props;
    return (
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: poster}}
        />
        <View style={styles.movieTextView}>
          <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            style={{fontSize:30}}
          >{title}</Text>
          <Text style={{fontSize:20}}>{year}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  movieTextView: {
    flexDirection: 'column',
    flex: 1,
    marginLeft: 4,
    marginRight: 1
  }
});
