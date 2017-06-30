import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';

//Common Components.
import { Header } from './components/common';

class App extends Component{

    //Defining a life cycle method.
    componentWillMount(){
        //Firebase Configuration//
        var config = {
            apiKey: "AIzaSyDe_YfTS9ABG5W5BelREHP6E1GEUtgWi6Q",
            authDomain: "auth-dffb9.firebaseapp.com",
            databaseURL: "https://auth-dffb9.firebaseio.com",
            projectId: "auth-dffb9",
            storageBucket: "auth-dffb9.appspot.com",
            messagingSenderId: "838881261950"
        };
        firebase.initializeApp(config);
        //----------------------//
    }

    render(){
        return(
            <View>
                <Header headerText="Authentication"></Header>
                <Text>My App!</Text>
            </View>
        );
    }
}

export default App;
// module.exports = App;