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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/home';
import UserScreen from './src/user';
import LogoTitle from './src/logo';
import DrawerHomeScreen from './src/home_drawer';
import DrawerUserScreen from './src/user_drawer';
import TabHomeScreen from './src/home_tab';
import TabUserScreen from './src/user_tab';
import TabMessageScreen from './src/message_tab';
import PictogramHome from './src/assets/pics/home_icon.png'
import SideDrawer from './src/my_drawer';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabBarIcon = (focused, name) => {
  let iconImagePath;
  let iconName, iconSize;

  if (name==='Home') {
    iconName = 'home-outline'
    // iconImagePath = require('./src/assets/pics/home_icon.png')
  } else if (name === 'User') {
    iconName = 'people-outline'
    // iconImagePath = require('./src/assets/pics/user.png')
  } else if (name === 'Message') {
    iconName = 'mail-outline'
    // iconImagePath = require('./src/assets/pics/message.png')
  }
  iconSize = focused ? 30 : 20 
  return (
    <Ionicons
      name={iconName}
      size={iconSize}
    />
    // <Image 
    //   style = {{
    //     width: focused ? 24 : 20,
    //     height: focused ? 24 : 20,
    //   }}
    //   source = {iconImagePath}
    // />
  )
}

// CustomDrawerContent = (props) => {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props}/>
//       <DrawerItem
//         label="Help"
//         onPress={()=>Linking.openURL('http://www.google.com')}
//         // Drawer Navigator에 이미지 추가하기 1번 방식
//         icon={()=><LogoTitle/>}
//       />
//       <DrawerItem
//         label="Info"
//         onPress={()=>alert('Info Window')}
//       />
//     </DrawerContentScrollView>
//   )
// }

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
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeBackgroundColor: 'skyblue',
            activeTintColor: 'blue',
            inactiveTintColor: '#fff',
            style: {
              backgroundColor: '#c6cbef'
            },
            // beside-icon, below-icon
            labelPosition: 'below-icon'
          }}
          // 그림을 삽입할 것인데, 탭이 선택함과 동시에 해당 그림이 조금 더 크게 보여지도록 할 것
          screenOptions={({route})=>({
            tabBarLabel: route.name,
            tabBarIcon: ({focused})=> {
              TabBarIcon(focused)
            }
          })}
        >
          <Tab.Screen name="Home" component={TabHomeScreen}/>
          <Tab.Screen name="User" component={TabUserScreen}/>
          <Tab.Screen name="Message" component={TabMessageScreen}/>
        </Tab.Navigator>
      </NavigationContainer>


      // <NavigationContainer>
      //   <Drawer.Navigator
      //     initialRouteName="Home"
      //     // drawerType = front, slide, permanent
      //     drawerType="front"
      //     // sideDrawer을 오른쪽에서 열 수 있는 방법 
      //     drawerPosition="right"
      //     drawerStyle={{
      //       backgroundColor: '#c6cbef',
      //       width: 200
      //     }}
      //     drawerContentOptions={{
      //       // active의 의미는 선택된 것 
      //       activeTintColor: 'red',
      //       activeBackgroundColor: 'skyblue'
      //     }}
      //     // drawerContent를 customizing할 수 있는 함수
      //     // 그래서 drawerContent를 렌더링하기 위한 react 요소를 반환한다. 
      //     // drawerContent는 default로 4가지의 props를 받는다.
      //     // 1. drawer naviagator에 어떤 route가 있는지 알기 위한 state
      //     // 2. 화면 이동을 해야하니 navigation
      //     // 3. drawer screen의 option을 담기 위한 descriptors 
      //     // 4. drawer가 열려있는지 닫혔는지 판단하기 위한 progress
      //     // Side drawer는 default로 drawercontent를 통해 scroll view를 적용한다. 
      //     drawerContent={props => <SideDrawer {...props} />}
      //   >
      //     <Drawer.Screen 
      //       name="Home" 
      //       component={DrawerHomeScreen} 
      //       options={{
      //         // Drawer Navigator에 이미지 추가하기 2번 방식
      //         drawerIcon: () => (
      //           <Image
      //             source={PictogramHome}
      //             style={{width: 40, height: 40}}
      //           />
      //         )
      //       }}
      //     />
      //     <Drawer.Screen name="User" component={DrawerUserScreen} />
      //   </Drawer.Navigator>

      // </NavigationContainer>
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
