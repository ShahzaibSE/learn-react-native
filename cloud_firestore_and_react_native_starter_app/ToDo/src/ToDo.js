import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'react-native-firebase';

export class ToDo extends Component {
    constructor() {
        super();
        this.ref = firebase.firestore().collection('todos');        
    }
    render() {
        return(
            <View>
                <Text>My To-Dos</Text>
            </View>
        );
    }
}