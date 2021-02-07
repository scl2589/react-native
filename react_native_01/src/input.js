/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
 
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';


// component를 상속받는 App이라는 클래스를 만들었다.
class Input extends Component {
    state = {
        myTextInput: 'asdfasdf'
    }

    onChangeInput = (event) => {
        this.setState({
            myTextInput: event
        })
    }

    render() {
        return (
            <View style={styles.mainView}>
                <TextInput
                    value={this.state.myTextInput}
                    style={styles.input}
                    onChangeText={this.onChangeInput}
                    multiline={true}
                    maxLength={100}
                    autoCapitalize={'none'}
                    editable={true}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        width: '100%'
    }, 
    input: {
        width: '100%',
        backgroundColor: '#cecece',
        marginTop: 20,
        fontSize: 25,
        padding: 20
    }
})

export default Input;
