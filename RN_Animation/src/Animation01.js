/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Animated, StyleSheet, View, Text } from 'react-native';

class AnimOne extends Component {
    constructor() {
        super(); 
        this.mySqure = new Animated.ValueXY(0, 0);
    }

    componentDidMount() {
        Animated.spring(this.mySqure, {
            toValue: {x:50, y:300}
        }).start();
    }

  render() {
    return (
      <Animated.View
        style={this.mySqure.getLayout()}
        // style={{
        //     left: this.mySqure.x,
        //     top: this.mySqure.y
        // }}
      >
          <View style={styles.square}>

          </View>
      </Animated.View>
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