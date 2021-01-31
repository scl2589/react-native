/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


class App extends Component{
  // state는 render 함수 밖에서 선언된다.
  // 데이터의 재사용성, 값 수정의 용이성 등등의 이유로 변수의 할당에서 필요할 때 가져다 쓰는 방식이 훨씬 더 효율적이고 합리적인 방법이 됩니다.

  state = {
    sampleText: 'Hello World',
    sampleBoolean: true
  }

  inputText = () => {
    return(
      this.state.sampleBoolean ? 
      // 값이 true이면
      <Text>sampleBoolean is true</Text>
      // 값이 false이면
      :
      <Text>sampleBoolean is false</Text>
      )
    }

  render() {
    return(
      <View style={styles.background}>
        {this.inputText()}
        {/* this는 react의 문법이 아니고 javascript의 문법입니다. */}
        <Text> {this.state.sampleText}</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex : 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})



export default App;