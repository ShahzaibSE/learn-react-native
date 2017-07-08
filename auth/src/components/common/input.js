import React, { Component } from 'react';
import { TextInput, Text, View } from 'react-native';

const Input = ({ label, value, onChangeText }) => {
    return(
        <View>
            <Text>{label}</Text>
            <TextInput style={{ height: 20, width: 100 }} />
        </View>
    );
};

export { Input };