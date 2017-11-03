import React from 'react'
import { View, Text, StyleSheet, Slider } from 'react-native'
import AddEntry from './components/addEntry'
import History from './components/history'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

export default class App extends React.Component {
  state = {
    value: 0,
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <View style={{ height: 20 }}></View>
          <History />
        </View>
      </Provider>

    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     // backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });
