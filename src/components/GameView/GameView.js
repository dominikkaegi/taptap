import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import TileView from '../TileView/TileView';
import ScoreView from '../ScoreView/ScoreView'

import colors from '../../../resources/colors';

class GameView extends Component {
  
  render() {

    return (
      <View style={styles.globalView}>
        <ScoreView style={styles.titleView}></ScoreView>
        <TileView style={styles.tileView}></TileView>
        <View style={{flex: 1}}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  globalView: {
    height: '100%',
    // alignContent: 'center',
    alignItems: 'stretch'
  },
  titleView: {
    flex: 2,
    backgroundColor: colors.white,
    alignItems: 'center'
  },
  tileView: {
    flex: 6,
    backgroundColor: colors.black,
  }
});

export default GameView;