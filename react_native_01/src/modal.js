/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
 
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Modal } from 'react-native';


// component를 상속받는 App이라는 클래스를 만들었다.
class ModalComponent extends Component {
    state = {
        modal: false
    }

    handleModal = () => {
        this.setState({
            modal: this.state.modal ? false : true
        })
    }

    render() {
        return (
            <View style={{width:'100%'}}>
                <Button 
                    title="Open Modal"
                    onPress={this.handleModal}
                />
                <Modal 
                    visible={this.state.modal}
                    animationType={'slide'} //slide fade none 값도 가능 
                    onShow={()=>alert("Warning!!!")} // 모달창이 떴을 때 trigger되는 프로퍼티
                >
                    <View style={{
                        marginTop: 60,
                        backgroundColor: 'red'
                    }}>
                        <Text>This is modal content</Text>
                    </View>
                    <Button 
                        title="Go Back"
                        onPress={this.handleModal}
                    />
                </Modal>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
})

export default ModalComponent;
