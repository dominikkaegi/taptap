import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import colors from '../../../resources/colors.js';

class HomeView extends Component {

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.globalView}>
        <TouchableOpacity style={styles.button} onPress={() => navigate('Game')}>
          <Text style={styles.buttonText}>Start Game</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => alert('Not Implemented Yet')}>
          <Text style={styles.buttonText}>High Scores</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  globalView: {
    height: '100%',
    backgroundColor: colors.white,
    alignContent: 'center',
    alignItems: 'stretch'
  },
  button: {
    height: 100,
    width: '80%',
    marginTop: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: colors.color5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: colors.white,
  }
});

export default HomeView;