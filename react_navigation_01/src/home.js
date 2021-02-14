/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// 맨 위에 넣기 
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class HomeScreen extends Component {
  render () {
    return (
      <View style={{
          flex:1,
          alignItems: 'center',
          justifyContent: 'center'
      }}>
          <Text>Home Screen</Text>
          <Button
            title="To User Screen"
            // HomeScreen에서 User Screen으로 이동하기 위해서 버튼을 터치 할 것
            // 그 버튼이 눌릴 때 userIdx, userName, userLastName이 parameter로 User의 route에 패싱이된다.
            onPress={() => {
                this.props.navigation.navigate('User', {
                    userIdx: 100,
                    userName: 'Gildong',
                    userLastName: 'Hong'
                })
            }}
          />
          <Button
            title="Change the title"
            onPress={() => 
                this.props.navigation.setOptions({
                    title: 'Changed!!!',
                    headerStyle: {
                        backgroundColor: 'pink',
                    },
                    headerTintColor: 'red'
                })
            }
          />
      </View>
    )
  }
}
export default HomeScreen;
