import React from 'react'
import { View } from 'react-native'
import AddEntry from './components/addEntry'

export default class App extends React.Component {
  componentDidMount() {
    console.log('before')
    debugger
    console.log('after')
  }
  render() {
    return (
      <View>
        <AddEntry />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
