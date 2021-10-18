
import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({


    container: {
      flex: 1,
      backgroundColor: '#ECBA82',

    },

    tapWrapper:{
      flex: 1,
      padding: 50,
      flexDirection: 'row',
      flexWrap:'wrap',
      alignContent:'center'
    },

    tap:{
      backgroundColor:'#AF5D63',
      width: 150,
      height: 150,
      margin: 2,
      textAlign: 'center',
      padding: 50,
      color:'#fff',
      fontSize:12
      
    },
  
    texto: {
      color: '#fff',
      fontSize: 34
    },
  
    slogan: {
      color:'#ffa'
    },
    header:{
      color: '#fff',
      borderStyle: 'dotted',
      fontSize: 30,
      alignSelf: 'center',
      borderBottomWidth: 3,
      borderBottomColor: '#FF5964',
      letterSpacing: 2,
      paddingTop: 5
    }

  
  
  });

  export default styles;
  