/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NumList = (props) => {
    return (
        // map이라는 method는 js에 배열 객체 내장 함수. (loop문과 같다.)
        // 요소 수만큼 loop를 도는데, 그 때의 요소 값이 첫번째 인자로 오고, 우리는 item으로 쓴것.
        // 그 요소의 index 값이 두 번째 인자로 오는데, 여기서 idx라고 쓴 것.
        props.num.map((item, idx)=>(
            <TouchableOpacity 
                style={styles.numList} key={idx}
                key={idx}
                onPress={()=>props.delete(idx)}
            >
                <Text>{item}</Text>
            </TouchableOpacity>
        ))
    )
}

const styles = StyleSheet.create({
    numList: {
        backgroundColor: '#cecece',
        alignItems: 'center',
        padding: 5,
        width: '100%',
        marginTop: 5
    }
})

export default NumList;
