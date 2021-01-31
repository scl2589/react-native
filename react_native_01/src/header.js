/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// jsx = javascript xml (javascript 확장 문법)
// 중괄호의 경우 return되는 jsx 컴포넌트가 없는 것
// exampleFunction = () => {

// }

// // 소괄호로 해야만 return되는 jsx 컴포넌트가 있어야 함
// exammpleFunction = () => (

// )
// // jsx = 태그로 감싸져서 변수에 할당되는 것
// const example = <tag>hello world</tag>


const Header = (props) => (
    <View style={styles.header}>
        <Text>{props.name}</Text>
    </View>
)

const styles = StyleSheet.create({
  header: {
      backgroundColor: 'pink',
      alignItems: 'center',
      padding: 5,
      width: '100%'
  }
})

export default Header;
