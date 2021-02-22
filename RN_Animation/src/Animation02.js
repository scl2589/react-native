/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Easing, Animated, StyleSheet, View, Text, Button } from 'react-native';

class AnimOne extends Component {
    constructor() {
        super();
        // state 선언하기
        this.state = {
            mySquare : new Animated.Value(1)
        }
    }

    runAnimation = () => {
        // Animated.spring(this.mySquare, {})
        Animated.timing(this.state.mySquare, {
            toValue: 0,
            duration: 2000,
            delay: 1500,
        }).start();
    }

  render() {
    return (
        <View>
            <Animated.View
                // style={this.state.mySquare.getLayout()}
                style={{
                    opacity: this.state.mySquare,
                    transform: [
                        {
                            rotateX: this.state.mySquare.interpolate({
                                inputRange: [0, 0.5, 1],
                                outputRange: ['0deg', '180deg', '360deg']
                            }),
                        },
                        {
                            translateX: this.state.mySquare.interpolate({
                                inputRange: [0, 0.5, 1],
                                outputRange: [300, 150, 0]
                            }),
                        }
                    ]
                    // top: this.state.mySquare.interpolate({
                    //     // 숫자가 작은 값부터 넣어줘야 한다.
                    //     inputRange: [0, 1],
                    //     // 동시에 효과를 내주고 싶은 property 
                    //     // property 를 top으로 넣었기 때문에 y축 좌표 값이 들어간다.
                    //     outputRange: [700, 0]
                    // })
                }}
            >
                <View style={styles.square}>
                </View>
            </Animated.View>
            <Animated.Text
                style={{
                    fontSize: this.state.mySquare.interpolate({
                        inputRange: [0, 0.5, 1],
                        outputRange: [40, 30, 20]
                    }),
                    color: this.state.mySquare.interpolate({
                        inputRange:[0, 0.5, 1],
                        outputRange: ['red', 'green', 'blue']
                    })
                }}
            >
                <Text>Animation Effects</Text>
            </Animated.Text>
            <Button
                title="Animation Start"
                onPress={this.runAnimation}
            />
        </View>
      
    )
  }
}

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'skyblue'
  }
})

export default AnimOne