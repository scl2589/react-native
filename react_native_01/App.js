/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
 
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from './src/header';
import Generator from './src/generator'
import NumList from './src/numlist'

// component를 상속받는 App이라는 클래스를 만들었다.
class App extends Component {
  state = {
    appName: 'My First App',
    random: [36, 999]
  }

  onAddRandomNum = (() => {
    const randomNum = Math.floor(Math.random()*100)+1;
    this.setState(prevState=> {
      return {
        random: [...prevState.random, randomNum]
      }
    })
  })

  onNumDelete = ((position) => {
    // alert('delete')
    // filter는 특정 조건에 부합되는 요소만 뽑아내서 새 배열을 만들어주는 함수
    const newArray = this.state.random.filter((num, index) => {
      return position != index;
    })

    this.setState({
      random: newArray
    })
  })

  render() {
    return (
      <View style={styles.mainView}>
        <Header name={this.state.appName}/>

        <View>
          <Text
            style={styles.mainText}
            onPress={()=>alert('text touch event')}
          >
            Hello World
          </Text>
        </View>
        <Generator add={this.onAddRandomNum}/>
        <ScrollView 
          style={{width: '100%'}}
          // onMomentumScrollBegin은 스크롤이 움직이기 시작했을 때 trigger 해준다
          // onMomentunScrollBegin={()=>alert('begin')}
          // onMomentumScrollBegin은 스크롤 움직임이 끝났을 때 trigger 해준다
          // onMomentunScrollEnd={()=>alert('end')}
          // onScroll은 스크롤의 움직임이 발생했을 때 trigger 해준다.
          // onScroll={()=>alert('Scrolling')}
          // size가 바뀔 때 alert를 출력해준다.
          // onContentSizeChange={(width, height)=>alert(height)}
          bounces={true}
        >
          <NumList 
            num={this.state.random}
            delete={this.onNumDelete}
          />
        </ScrollView>
      </View> 
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    // flex는 화면을 채우는 컴포넌트들간의 차지하는 영역의 비율을 나타내는 지표이다.
    // VIew가 2개인데 하나는 flex가 1이고, 다른하나는 3이라면, 하나는 1/4만큼, 다른 하나는 3/4만큼 화면의 영역을 차지한다.
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    alignItems: 'center',
    // justifyContent: 'center'
  },
  subView: {
    flex: 1,
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  anotherSubView: {
    flex: 2,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20
  }
})

export default App;
