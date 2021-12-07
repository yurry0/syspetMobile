import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  corpo: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  logo: {

    width: 150,
    height: 150,
    margin: 10

  },
  text: {
    fontSize: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'orange',
    letterSpacing: 2,
  },

  label: {
    marginTop: 10,
    fontSize: 15,
    borderBottomWidth: 2,
    borderBottomColor: 'orange',
    letterSpacing: 2

  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 25,
    marginBottom: 10,

  },

  botao: {
    marginTop: 20,
    width: 150,
    height: 42,
    backgroundColor: '#53DD6C',
    marginBottom: 22,



  },

  botaoCad: {
    marginTop: 5,
    width: 150,
    height: 42,
    backgroundColor: '#53DD6C',
    marginBottom: 80,


  },

  botaoDebug: {
    marginTop: 5,
    width: 150,
    height: 42,
    backgroundColor: '#20A39E',
    marginBottom: 80,


  },

  botaoText: {
    color: '#fff',
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 16
  }

});


export default styles;