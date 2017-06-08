//Place your IOS index.ios.js code here. 



//Import Libraries to help create component.
import React from 'react';
import { AppRegistry, Text, View } from 'react-native';

//Import Components
import Header from './src/components/header';
import AlbumList from './src/components/albumList';




//Create your 'Component'.
const App = () =>
      (
           <View style={{ flex: 1 }}> 
            <Header headerText={'Albums!'} />
            <AlbumList />
           </View>
      );
      // return (      
      // <Text>Some Text</Text>;
      // )



//Render your component in your device.
AppRegistry.registerComponent('albums', ()=>App);
