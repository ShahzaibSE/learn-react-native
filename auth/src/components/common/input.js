/*
  If we set two styles on a component, the earler style will be overidden by the following style(another style attribute).
 */

import React, { Component } from 'react';
import { TextInput, Text, View } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;

    // console.log(`Label: ${label}`);
    console.log(`Value: ${value}`);

    return(
        <View style={containerStyle}>
            <Text style={ labelStyle }>{label}</Text>
            <TextInput placeholder={placeholder} autoCorrect={false} style={inputStyle} onChangeText={onChangeText} />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingLeft: 5,
        padingRight: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },

    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },

    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}

export { Input };