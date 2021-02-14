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
import { StyleSheet, View, Text} from 'react-native';
// 모든 navigation 구조는 navigation container안에 들어가야 한다.
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/home';
import UserScreen from './src/user';

const Stack = createStackNavigator();

class App extends Component {
  render () {
    return (
      <NavigationContainer>
        {/* initialRouteName은 어떤 스크린이 먼저뜨는지 설정하는 것이다. */}
        <Stack.Navigator initialRouteName="User">
          {/* 각각이 route가 되는 것 */}
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{title: 'Home Screen'}}
          />  
          <Stack.Screen 
            name="User" 
            component={UserScreen}
            initialParams={{
              userIdx: 50,
              userName: 'Gildong',
              userLastName: 'Go'
            }}
            // options={{
            //   title: 'User Screen',
            //   headerStyle: {
            //       backgroundColor: 'pink',
            //   },
            //   headerTintColor: 'red',
            //   headerTitleStyle: {
            //     fontWeight: 'bold',
            //     color: 'purple'
            //   }
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  
});

export default App;