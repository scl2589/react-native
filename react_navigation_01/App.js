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
import { StyleSheet, View, Text, Image, Button, Linking } from 'react-native';
// 모든 navigation 구조는 navigation container안에 들어가야 한다.
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import HomeScreen from './src/home';
import UserScreen from './src/user';
import LogoTitle from './src/logo';
import DrawerHomeScreen from './src/home';
import DrawerUserScreen from './src/user';
import PictogramHome from './src/assets/pics/home_icon.png'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props}/>
      <DrawerItem
        label="Help"
        onPress={()=>Linking.openURL('http://www.google.com')}
        // Drawer Navigator에 이미지 추가하기 1번 방식
        icon={()=><LogoTitle/>}
      />
      <DrawerItem
        label="Info"
        onPress={()=>alert('Info Window')}
      />
    </DrawerContentScrollView>
  )
}

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
        <Drawer.Navigator
          initialRouteName="Home"
          // drawerType = front, slide, permanent
          drawerType="front"
          // sideDrawer을 오른쪽에서 열 수 있는 방법 
          drawerPosition="right"
          drawerStyle={{
            backgroundColor: '#c6cbef',
            width: 200
          }}
          drawerContentOptions={{
            // active의 의미는 선택된 것 
            activeTintColor: 'red',
            activeBackgroundColor: 'skyblue'
          }}
          // drawerContent를 customizing할 수 있는 함수
          // 그래서 drawerContent를 렌더링하기 위한 react 요소를 반환한다. 
          // drawerContent는 default로 4가지의 props를 받는다.
          // 1. drawer naviagator에 어떤 route가 있는지 알기 위한 state
          // 2. 화면 이동을 해야하니 navigation
          // 3. drawer screen의 option을 담기 위한 descriptors 
          // 4. drawer가 열려있는지 닫혔는지 판단하기 위한 progress
          // Side drawer는 default로 drawercontent를 통해 scroll view를 적용한다. 
          drawerContent={props => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen 
            name="Home" 
            component={DrawerHomeScreen} 
            options={{
              // Drawer Navigator에 이미지 추가하기 2번 방식
              drawerIcon: () => (
                <Image
                  source={PictogramHome}
                  style={{width: 40, height: 40}}
                />
              )
            }}
          />
          <Drawer.Screen name="User" component={DrawerUserScreen} />
        </Drawer.Navigator>

      </NavigationContainer>
      // <NavigationContainer>
      //   {/* initialRouteName은 어떤 스크린이 먼저뜨는지 설정하는 것이다. */}
      //   <Stack.Navigator 
      //     initialRouteName="Home"
      //     // 모든 screen에 공통으로 옵션/스타일을 줄 수 있다. 
      //     screenOptions={{
      //       headerStyle: {
      //           backgroundColor: '#a4511e',
      //       },
      //       headerTintColor: '#fff',
      //       headerTitleStyle: {
      //         fontWeight: 'bold',
      //         color: '#f3d612'
      //       }
      //     }}
      //   >
      //     {/* 각각이 route가 되는 것 */}
      //     <Stack.Screen 
      //       name="Home" 
      //       component={HomeScreen}
      //       options={{
      //         title: 'Home Screen',
      //         headerTitle: <LogoTitle/>,
      //         headerRight: () => (
      //           <Button
      //             title="Info"
      //             onPress={()=>alert('I am a button!')}
      //             color='orange'
      //           />
      //         )
      //       }}
      //     />  
      //     <Stack.Screen 
      //       name="User" 
      //       component={UserScreen}
      //       initialParams={{
      //         userIdx: 50,
      //         userName: 'Gildong',
      //         userLastName: 'Go'
      //       }}
      //       // 만약 userScreen에만 다른 header 스타일을 주고 싶다면? 아래 방식으로 따로 설정한다.
      //       options={{
      //         title: 'User Screen',
      //         headerStyle: {
      //             backgroundColor: 'pink',
      //         },
      //         headerTintColor: 'red',
      //         headerTitleStyle: {
      //           fontWeight: 'bold',
      //           color: 'purple'
      //         }
      //       }}
      //     />
      //   </Stack.Navigator>
      // </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  
});

export default App;
