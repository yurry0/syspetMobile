import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    logo: {
  
      width: 150,
      height: 150,
      borderRadius: 100
  
    },
  
    barra: {
      marginTop: 10,
      borderWidth: 1,
      padding: 10,
      width: 300,
      backgroundColor: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      borderRadius: 3
    },
    
    botao: {
      marginTop: 50,
      width: 300,
      height: 42, 
      backgroundColor: '#C83E4D',
  
    },
  
    botaoText: {
      color: '#fff',
      alignSelf: 'center',
      marginTop: 10,
      fontSize: 16
    }
  
});


  export default styles;