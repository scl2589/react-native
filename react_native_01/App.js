/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
 
import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import Header from './src/header';
import Generator from './src/generator'
import NumList from './src/numlist'
import Input from './src/input';
import Picker from './src/picker'

// component를 상속받는 App이라는 클래스를 만들었다.
class App extends Component {
  state = {
    myTextInput: 'asdfasdf',
    alphabet:['a', 'b', 'c', 'd']
  }

  onChangeInput = (event) => {
    this.setState({
      myTextInput: event
    })
  }

  onAddTextInput = () => {
    this.setState(prevState=>{
      return {
        myTextInput: '',
        alphabet: [...prevState.alphabet, prevState.myTextInput]
      }
    })
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Picker></Picker>
        <TextInput
            value={this.state.myTextInput}
            style={styles.input}
            onChangeText={this.onChangeInput}
            multiline={true}
            maxLength={100}
            autoCapitalize={'none'}
            editable={true}
        />
        <Button
          title="Add Text Input"
          onPress={this.onAddTextInput}
        />
          <ScrollView style={{width: '100%'}}>
            {
              this.state.alphabet.map((item, idx) => (
                <Text
                  style={styles.mainText}
                  key={idx}
                >
                  {item}
                </Text>
              ))
            }
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
    padding: 20,
    margin: 20,
    backgroundColor: 'pink'
  },
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 20
  }
})

export default App;
