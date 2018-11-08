import React, {Component} from 'react';
import {StyleSheet, View,  Text} from 'react-native';


import Tile from './Tile'

import colors from '../../../resources/colors'

class TileView extends Component {
  render() {
    return (
      <View style={[this.props.style, styles.tileView]}>
        <View style={styles.tileRow}>
          <Tile style={styles.tile} bgColor={colors.color1} iconName="plus-circle"/>  
          <Tile style={styles.tile} bgColor={colors.color2} iconName="minus-circle"/>  
        </View>
        <View style={styles.tileRow}>
          <Tile style={styles.tile} bgColor={colors.color3} iconName="times-circle"/>   
          <Tile style={styles.tile} bgColor={colors.color4} iconName="check-circle"/>  
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    height: '100%'
  },
  tileRow: {
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-around',
    height: '100%'
  },
  tileView: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
});

export default TileView;