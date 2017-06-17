import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
     const { textStyle, buttonStyle } = styles;

     return (
      <TouchableOpacity onPress={onPress} style={buttonStyle}>   
       <Text style={styles.textStyle}>{ children }</Text>
       </TouchableOpacity>
     );
};

const styles = {
    textStyle: {
      fontWeight: 'bold',
      alignSelf: 'center',
      fontSize: 16,
      paddingTop: 10,
      paddingBottom: 10,
      color: '#007aff'
    },

    buttonStyle: {
      flex: 1,
      marginRight: 5,
      marginLeft: 5,
      backgroundColor: '#fff',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#007aff'
    }
};

export default Button;
