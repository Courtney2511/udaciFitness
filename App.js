import React from 'react'
import { View, Text, StyleSheet, Slider } from 'react-native'
import AddEntry from './components/addEntry'

export default class App extends React.Component {
  state = {
    value: 0,
  }
  render() {
    return (
      <View style={ styles.container }>
        <AddEntry />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
