import React, {Component} from 'react';
import {StyleSheet, View,  Text} from 'react-native';

import PropTypes from 'prop-types';

import {Timer} from './Timer'

class ScoreView extends Component {


  render() {
    return (
      <View style={this.props.style}>
        <Text>Timer:</Text>
        <Text>Score:</Text>
        <Text>ZZZ
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  timer: {
    alignContent: 'center',
  }
});

export default ScoreView;