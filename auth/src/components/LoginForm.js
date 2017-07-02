import React, { Component } from 'react';
import { TextInput, Text, View }  from 'react-native';

//Components
import { Card, CardSection, Button } from './common'

 class LoginForm extends Component{

     state = { text: '' }

     render(){
         return(
             <Card>
                 <CardSection>
                     <TextInput value={this.state.text} onChangeText={ text => { this.setState({text}) } } style={{ height: 20, width: 100 }} />
                 </CardSection>
                 
                 <CardSection/>

                 <CardSection>
                     <Button>Log In</Button>
                 </CardSection>
             </Card>
         );
     }
 }

 export default LoginForm;