/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// props의 좋은 점은 부모의 데이터를 자식이 쉽게 받을 수 있다는 것
// 자식이 부모의 데이터를 받아서 부모의 데이터는 훼손시키지 않고, 이런저런 작업이 가능한 것이 props의 큰 장점

import React from 'react';
import { View, Text, } from 'react-native';

const PropsChild = (props) => {
    return (
        <View>
            <Text onPress={props.cState}>
                {props.sText}
            </Text>
        </View>
    )
}

export default PropsChild;