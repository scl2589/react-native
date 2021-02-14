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
import { StyleSheet, View, Text, Image } from 'react-native';
// 모든 navigation 구조는 navigation container안에 들어가야 한다.
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/home';
import UserScreen from './src/user';
import LogoTitle from './src/logo';

const Stack = createStackNavigator();

class App extends Component {

  // logoTitle = () => {
  //   return (
  //     <Image
  //       style={{idth:40, height:40}}
  //       source={require('./src/assets/pics/home_icon.png')} 
  //     />
  //   )
  // }

  render () {
    return (
      <NavigationContainer>
        {/* initialRouteName은 어떤 스크린이 먼저뜨는지 설정하는 것이다. */}
        <Stack.Navigator 
          initialRouteName="Home"
          // 모든 screen에 공통으로 옵션/스타일을 줄 수 있다. 
          screenOptions={{
            headerStyle: {
                backgroundColor: '#a4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#f3d612'
            }
          }}
        >
          {/* 각각이 route가 되는 것 */}
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
              title: 'Home Screen',
              headerTitle: <LogoTitle/>
            }}
          />  
          <Stack.Screen 
            name="User" 
            component={UserScreen}
            initialParams={{
              userIdx: 50,
              userName: 'Gildong',
              userLastName: 'Go'
            }}
            // 만약 userScreen에만 다른 header 스타일을 주고 싶다면? 아래 방식으로 따로 설정한다.
            options={{
              title: 'User Screen',
              headerStyle: {
                  backgroundColor: 'pink',
              },
              headerTintColor: 'red',
              headerTitleStyle: {
                fontWeight: 'bold',
                color: 'purple'
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  
});

export default App;
