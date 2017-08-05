import React, { Component } from 'react';
import { TextInput, Text, View }  from 'react-native';

//Components
import { Card, CardSection, Button, Input } from './common'

 class LoginForm extends Component{

     state = { email : '', password : '' }

     render(){
         return(
             <Card>
                 <CardSection>
                     <Input label="Email" placeholder="abc@gmail.com" value={this.state.email} onChangeText={ email => { this.setState({ email }) } }  />
                 </CardSection>
                 
                 <CardSection>
                     <Input secureTextEntry label="Password" placeholder="Password" value={this.state.password} onChnageText={passowrd => {this.setState({ password })}} />
                 </CardSection>

                 <CardSection>
                     <Button>Log In</Button>
                 </CardSection>
             </Card>
         );
     }
 }

 export default LoginForm;