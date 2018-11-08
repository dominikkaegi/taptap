import React, {Component} from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeView from './src/components/HomeView/HomeView';
import GameView from './src/components/GameView/GameView';


// class App extends Component {
//   componentDidMount() {
//     Font.loadAsync({
//       'FontAwesome': require('./assets/fonts/FontAwesome.ttf'),
//     });
//   }

//   render() {
//     return (
//       <View>
//         <NavApp></NavApp>
//       </View>
//     );
//   }
// }

const App = createStackNavigator(
  {
    Home: {
      screen: HomeView,
      navigationOptions: () => ({
        title: 'TapTap'
      })
    },
    Game: { 
      screen: GameView
    },

  },
);

export default App;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'yellow'
  },
});
