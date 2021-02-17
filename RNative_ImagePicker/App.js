/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Contacts from 'react-native-contacts';
// import ImagePicker from 'react-native-image-picker'
// import * as ImagePicker from 'react-native-image-picker';

class App extends Component {
  state = {
    avatar: ''
  }

  addImage = () => {
    // launchCamera 메소드를 불러온다. 콜백함수를 갖는데 카메라를 기동시켜서 사진을 찍을 것인데, 그 response를 받아와서 state에 avatar값을 갱신시켜준다.
    launchImageLibrary({
      title: 'Choose your photo',
      takePhotoButtonTitle: 'Take a pretty one',
      chooseFromLibraryButtonTitle: 'Select an old one',
      cancleButtonTitle: 'Just go back'
    }, response=>{
      this.setState({
        avatar: response.uri
      })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={{uri:this.state.avatar}}
          style={styles.avatar}
        />

        {/* 버튼을 눌렀을 때 그림을 불러오거나 카메라를 기동시켜서 사진을 찍는 일을 할 수 있도록 함수를 호출  */}
        <Button
          title="Add an Image"
          onPress={()=>this.addImage()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4ab26'
  },
  avatar: {
    width: '100%',
    height: 400
  }
});

export default App;