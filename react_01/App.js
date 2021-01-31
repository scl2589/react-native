/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// child 컴포넌트 import 하기
import PropsChild from './propsChild'

class App extends Component{
  // state는 render 함수 밖에서 선언된다.
  // 데이터의 재사용성, 값 수정의 용이성 등등의 이유로 변수의 할당에서 필요할 때 가져다 쓰는 방식이 훨씬 더 효율적이고 합리적인 방법이 됩니다.
  // state는 직접 변경하면 안되는 특성을 가지고 있다.
  // setState를 통해 갱신해야 한다.
  // setState를 통해 데이터의 값을 변경할 때는, 현재 버전을 카피한 다음에 다음 버전을 업데이트한다.

  // props는 readOnly, 수정 변경이 불가능한 읽기 전용 property 값이다.
  // props는 부모/자식 관계 형식이 만들어져야 의미가 있다.
  // 자식 컴포넌트는 부모로부터 props라는 데이터를 받고, 값은 자식 컴포넌트 내에서 수정, 변경되지 않고 그대로 쓰인다.
  // props를 왜 쓸까? 한 부모에게 여러 자식이 있을 수가 있음. 부모가 첫째에게 편지쓰고, 둘째에게, 셋쩨에게 똑같은 편지를 또 써. 
  // 이 경우는 굉장히 비효율적이기 때문에 부모가 오리지널 값을 갖고 있고 props를 통해 자식들에게 같은 것들을 간편하고 손쉽게 전달하면 된다.

  state = {
    sampleText: 'Hello World',
    sampleBoolean: true,
    sampleNum: 1
  }

  inputText = () => {
    return(
      this.state.sampleBoolean ? 
      // 값이 true이면
      <Text>sampleBoolean is true</Text>
      // 값이 false이면
      :
      <Text>sampleBoolean is false</Text>
    )
  }
  
  changeState = () => {
    if (!this.state.sampleBoolean) {
      this.setState({
        sampleText: 'Text Changed!!!',
        sampleBoolean: true
      })
    } else {
      this.setState({
        sampleText: 'Hello World!!!',
        sampleBoolean: false
      })
    }
  }

  onAdd = () => {
    this.setState(prevState => {
      // setState값을 통한 데이터 값의 변경을 위해서는 현재 버전을 copy하고 update를 진행합니다.
      // prevState라는 현재 버전의 state값을 setState의 첫번째 인자로 넣으면 됩니다.
      return {
        sampleNum: prevState.sampleNum + 1
      }
    })
  }


  render() {
    return(
      <View style={styles.background}>
        <PropsChild sText={this.state.sampleText} cState={this.changeState}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex : 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})



export default App;