import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';

class Tile extends Component {
  styles = StyleSheet.create({
    container: {
      backgroundColor: this.props.bgColor ? this.props.bgColor : 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


  render() {
    const {props, styles} = this;
    return (
      <TouchableOpacity style={[props.style, styles.container]}>
        <Text style={{fontSize: 30}}><FontAwesome name={props.iconName} size={80} /></Text>
      </TouchableOpacity>
    )
  }
}

export default Tile;
