//Place your IOS index.ios.js code here. 



//Import Libraries to help create component.
import React from 'react';
import {AppRegistry,Text} from 'react-native';

//Import Components
import Header from './src/components/header';



//Create your 'Component'.
const App = () =>
      (
            <Header headerText={'Albums!'} />
      )
      // return (      
      // <Text>Some Text</Text>;
      // )



//Render your component in your device.
AppRegistry.registerComponent('albums', ()=>App);