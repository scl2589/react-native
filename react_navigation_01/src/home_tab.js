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
import { StyleSheet, ScrollView, Image, View, Text, Button } from 'react-native';
import Logo from './assets/pics/home_icon.png';
import { CommonActions } from '@react-navigation/native';

class TabHomeScreen extends Component {
    navigateToScreen = (route) => () => {
        this.props.navigation.dispatch(
            CommonActions.navigate({
                name: route, 
                params: {},
            })
        )
    }
  render () {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
            }}
        >
            <Text>Home Screen</Text>
        </View>
    )
  }
}
export default TabHomeScreen;
