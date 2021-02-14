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
            onPress={() => {
                this.props.navigation.navigate('User')
            }}
          />
      </View>
    )
  }
}
export default HomeScreen;
