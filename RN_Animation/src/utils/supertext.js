/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Supertext = (props) => {
    return (
        <Text 
            // {...props}
            // style={styles.supertext}
            style={[styles.supertext, props.style]}
        >
            {props.children}
        </Text>
    )
}

    const styles = StyleSheet.create({
        supertext: {
            backgroundColor: 'skyblue',
            fontSize: 25 ,
            color: 'blue', 
            padding: 15,
            width: 300
        }
    });

export default Supertext;