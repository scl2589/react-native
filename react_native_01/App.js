/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

//react라는 모듈에서 component라는 클래스를 import 한 것
import React, { Component } from 'react';
// View와 Text는 react-native 모듈에서 import 한 것 
import { View, Text } from 'react-native';

// component를 상속받는 App이라는 클래스를 만들었다.
class App extends Component {
  // App 클래스 안에는 화면을 rendering하는 함수가 있다.
  render() {
    return (
      <View>
        <View>
          <Text>hello world</Text>
        </View>
        <View>
          <Text>hello world</Text>
        </View>
        <View>
          <Text>hello world</Text>
        </View>
      </View>
    )
  }
}


export default App;
