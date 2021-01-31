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
  // state는 직접 변경하면 안되는 특성을 가지고 있다.
  // setState를 통해 갱신해야 한다.
  // setState를 통해 데이터의 값을 변경할 때는, 현재 버전을 카피한 다음에 다음 버전을 업데이트한다.

  state = {
    sampleText: 'Hello World',
    sampleBoolean: true,
    sampleNum: 1
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
  
  changeState = () => {
    if (!this.state.sampleBoolean) {
      this.setState({
        sampleText: 'Text Changed!!!',
        sampleBoolean: true
      })
    } else {
      this.setState({
        sampleText: 'Hello World!!!',
        sampleBoolean: false
      })
    }
  }

  onAdd = () => {
    this.setState(prevState => {
      // setState값을 통한 데이터 값의 변경을 위해서는 현재 버전을 copy하고 update를 진행합니다.
      // prevState라는 현재 버전의 state값을 setState의 첫번째 인자로 넣으면 됩니다.
      return {
        sampleNum: prevState.sampleNum + 1
      }
    })
  }


  render() {
    return(
      <View style={styles.background}>
        {/* {this.inputText()} */}
        {/* this는 react의 문법이 아니고 javascript의 문법입니다. */}
        <Text onPress={this.changeState}> 
          {this.state.sampleText}
        </Text>
        <Text onPress={this.onAdd}> 
          {this.state.sampleNum}
        </Text>

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