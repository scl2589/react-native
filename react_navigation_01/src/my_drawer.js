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

class sideDrawer extends Component {
    // arrow가 2개 있으니까 return 값이 2개 있다고 생각하면 된다. 
    // 중괄호 안에 값을 return하는 함수를 또 return 값으로 받는다.
    // 그 때의 parameter를 route 로 들어간다.
    navigateToScreen = (route) => () => {
        this.props.navigation.dispatch(
            // CommonActions라는 라이브러리는 여러 action creators를 쓰게 도와줌 
            // 그 중 하나가 navigate라는 액션으로, 특정 route에 이동할 수 있도록 도와주는 action
            // 이런 액션이 발생하면 dispatch를 통해 state 값을 update 시켜준다. 
            CommonActions.navigate({
                name: route, 
                params: {},
            })
        )
    }
  render () {
    return (
      <View style={styles.container}>
          <ScrollView>
              <View>
                  <View style={styles.imageContainer}>
                      <Image 
                        source={Logo}
                        style={{width: 40, height: 40}}
                      />
                  </View>
                  <Text style={styles.sectionHeading}>Section 1</Text>
                  <View style={styles.navSectionStyle}>
                        <Text 
                            style={styles.navItemStyle}
                            onPress={this.navigateToScreen('Home')}
                        >
                            Home
                        </Text>
                        <Text
                            style={styles.navItemStyle}
                            onPress={this.navigateToScreen('User')}
                        >
                            User
                        </Text>
                        <Text 
                            style={styles.navItemStyle}
                            onPress={()=>alert('Help Window')}
                        >
                            Help
                        </Text>
                        <Text 
                            style={styles.navItemStyle}
                            onPress={()=>alert('Info WIndow')}
                        >
                            Info
                        </Text>
                  </View>
              </View>
          </ScrollView>
          <View style={{paddingLeft: 10, paddingBottom: 30}}>
              <Text>Copyright @ Lin, 2021.</Text>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80
    },
    imageContainer: {
        alignItems: 'center',
        padding: 50,
    },
    sectionHeading: {
        color: '#fff',
        backgroundColor: '#ef9de4',
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontWeight: 'bold'
    },
    navSectionStyle: {
        backgroundColor: '#04b6ff'
    },
    navItemStyle: {
        padding: 10,
        color: '#fff'
    }
})
export default sideDrawer;
