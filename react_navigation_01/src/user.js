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

class UserScreen extends Component {

    headerStyle = () => {
        this.props.navigation.setOptions({
            title: 'User',
            headerStyle: {
                backgroundColor: 'blue',
            },
            headerTintColor: 'yellow',
            headerTitleStyle: {
                fontWeight: 'bold',
                color: 'green'
            },
            headerBackTitle: 'BACK',
            // Navigate 함수를 이용해 홈 화면으로 가도록 만드는 것
            headerRight: () => (
                <Button
                  title="Go Back"
                  onPress={()=>{
                      this.props.navigation.navigate('Home')
                  }}
                  color='orange'
                />
            )
        })
    }
  render () {
    this.headerStyle();
    // 이 스크린의 route 값을 할당해준다.
    {/* 패싱 된 값들이 본인의 route에 있는 것이기 때문에 this.props.route로 받아오는 것 */}
    const {params} = this.props.route;
    const userIdx = params ? params.userIdx : null;
    const userName = params ? params.userName : null;
    const userLastName = params ? params.userLastName : null;
    return (
        <View style={{
            flex:1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>User Screen</Text>
            <Button
            title="To Home Screen"
            onPress={() => {
                this.props.navigation.navigate('Home')
            }}
          />
          <Text>User Idx: {JSON.stringify(userIdx)}</Text>
          <Text>User Name: {JSON.stringify(userName)}</Text>
          <Text>User LastName: {JSON.stringify(userLastName)}</Text>
        </View>
    )
  }
}


export default UserScreen;
