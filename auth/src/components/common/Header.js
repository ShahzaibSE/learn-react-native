import React from 'react';
import { Text, View } from 'react-native';

//Styling JS
import styles from './headerStyle';

const Header = (props) => {
    return (
     <View style={styles.viewStyle}>
     <Text style={styles.albumHeader}>{props.headerText}</Text>
     </View>
     );
};

export { Header };

// class header extends Component{
  
//   render(){

//   }

// }
