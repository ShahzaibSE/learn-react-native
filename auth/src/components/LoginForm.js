import React, { Component } from 'react';
import { TextInput, Text, View }  from 'react-native';

//Components
import { Card, CardSection, Button, Input } from './common'

 class LoginForm extends Component{

     state = { email: '' }

     render(){
         return(
             <Card>
                 <CardSection>
                     <Input label="Email" placeholder="abc@gmail.com" value={this.state.email} onChangeText={ email => { this.setState({ email }) } }  />
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