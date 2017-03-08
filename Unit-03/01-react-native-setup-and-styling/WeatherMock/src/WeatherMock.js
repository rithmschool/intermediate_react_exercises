import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

export default class WeatherMock extends Component {
  render() {
    const icons = this.props.forecast.map((i, id) => (
      <View key={id} style={{flexDirection: 'row', marginTop: 4, justifyContent: 'space-between', width: "90%"}}>
        <Text style={[styles.textColor]}>{i.day}</Text> 
        <Icon name={i.icon} color={i.color} size={27} />
        <Text style={[styles.textColor]}>{i.high} {i.low}</Text> 
      </View>
      )
    );
    return (
      <Image style={styles.image} source={require('../images/sunset-background.jpg')}>
        <LinearGradient colors={['rgba(90,0,128,0)', 'rgba(90,0,128,1)']} style={{flex:1}}>
          <View style={styles.transparentBackground}>
            <View style={styles.tempHeading} >
              <Text style={[styles.textColor, {fontSize: 40, fontWeight: '200'}]}>San Francisco</Text>
              <Text style={[styles.textColor, {fontSize: 15, fontWeight: '200'}]}>Mostly Cloudy</Text>
              <Text style={[styles.textColor, {fontSize: 70, fontWeight: '100'}]}>55°</Text>
            </View>
            <View style={styles.tempDetails} >
              <View style={styles.todayDetails}>
                <Text style={[styles.textColor]}>Tuesday Today</Text>
                <Text style={[styles.textColor]}>58 48</Text>
                <Icon name='ios-rainy' color='white' size={30} />
              </View>
              <View>
                {icons}
              </View>
            </View>
          </View>
        </LinearGradient>
      </Image>
    );
  }
}
WeatherMock.defaultProps = {forecast: [
  {day: "Wednesday", icon: 'ios-sunny', color: 'yellow', high: '63', low: '50'},
  {day: "Thursday ",  icon: 'ios-sunny', color: 'yellow', high: '63', low: '50'},
  {day: "Friday   ",  icon: 'ios-sunny', color: 'yellow', high: '63', low: '50'},
  {day: "Saturday ",  icon: 'ios-sunny', color: 'yellow', high: '63', low: '50'},
  {day: "Sunday   ",  icon: 'ios-sunny', color: 'yellow', high: '63', low: '50'},
  {day: "Monday   ",  icon: 'ios-sunny', color: 'yellow', high: '63', low: '50'},
  {day: "Tuesday  ",  icon: 'ios-sunny', color: 'yellow', high: '63', low: '50'},
]};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: 'stretch',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  transparentBackground: {
    width: "100%",
    height: "100%",
    backgroundColor: 'rgba(0,0,0,0)',
  },
  textColor: {
    color: 'white'
  },
  tempHeading: {
    flex: .45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempDetails: {
    flex: 0.55,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  todayDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "90%",
    borderBottomWidth: 1,
    borderBottomColor: "white"
  }
});
