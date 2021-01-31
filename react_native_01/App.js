/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

//react라는 모듈에서 component라는 클래스를 import 한 것
import React, { Component } from 'react';
// View와 Text는 react-native 모듈에서 import 한 것, StyleSheet 이라는 Class import하기
import { View, Text, StyleSheet } from 'react-native';

// component를 상속받는 App이라는 클래스를 만들었다.
class App extends Component {
  // App 클래스 안에는 화면을 rendering하는 함수가 있다.
  render() {
    return (
      // 첫번째 중괄호는 jsx, 두번째 중괄호는 객체를 담는 것을 의미한다.
      // View는 화면을 채우는 container와 같은 역할을 한다.

      // 아래는 Inline Styling
      // <View style={{
      //   backgroundColor: 'green',
      //   height: '100%',
      //   paddingTop: 50
      // }}>
      //   <View>
      //     <Text>hello world</Text>
      //   </View>
      //   <View>
      //     <Text>hello world</Text>
      //   </View>
      //   <View>
      //     <Text>hello world</Text>
      //   </View>
      // </View>

      // Class Style
      <View style={styles.mainView}>
        <View style={styles.subView}>
          <Text style={styles.mainText}>hello world</Text>
        </View>
        <View style={styles.subView}>
          <Text>hello world</Text>
        </View>
        <View style={styles.anotherSubView}>
          <Text style={styles.mainText}>hello world</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    // flex는 화면을 채우는 컴포넌트들간의 차지하는 영역의 비율을 나타내는 지표이다.
    // VIew가 2개인데 하나는 flex가 1이고, 다른하나는 3이라면, 하나는 1/4만큼, 다른 하나는 3/4만큼 화면의 영역을 차지한다.
    flex: 1,
    backgroundColor: 'green',
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  subView: {
    flex: 1,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '50%'
  },
  anotherSubView: {
    flex: 2,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'red',
    padding: 20
  }
})

export default App;
