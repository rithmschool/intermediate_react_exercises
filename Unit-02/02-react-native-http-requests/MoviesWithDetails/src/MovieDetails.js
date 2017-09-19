import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {}
    }
  }

  componentDidMount() {
    const {imdbID} = this.props.navigation.state.params;
    fetch(`https://www.omdbapi.com/?i=${imdbID}&plot=full`)
      .then(d => d.json())
      .then(d => {
        this.setState({movie: d});
      })
      .catch(e => {
        console.warn(e)
      });
  }
  render() {
    let view;
    if (this.state.movie.Title === undefined) {
      view = ( 
            <View style={styles.main}>
              <Icon name="hourglass" size={50} color="#900" />
            </View>
          );
    } else {
      const {Title, Year, Runtime, Actors, Plot, Poster} = this.state.movie;
      view = (
          <ScrollView>
            <View style={{justifyContent: 'space-around', margin: 25, alignItems: 'center'}}>
              <Text style={{fontSize: 40}}>{Title}</Text>
              <Text>{Year}</Text>
              <Text>{Runtime}</Text>
              <Text>{Actors}</Text>
            </View>
            <View style={{width: "100%", alignItems: "center"}}>
              <Image
                style={{width: "90%", height: 200}}
                source={{uri: Poster}}
                />
            </View>
            <Text style={{fontSize: 25, margin: 15, padding: 5}}>{Plot}</Text>
          </ScrollView>
        );
    }
    return view;
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});