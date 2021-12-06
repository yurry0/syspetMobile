import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },

  touchableOpacity: {
    backgroundColor: '#DD2D4A',
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },

  touchableOpacityText: {
    color: '#FFFFFF',
    fontSize: 23,
    textAlign: 'center',
    padding: 8
  },

  textInputStyle: {
    height: 45,
    width: '90%',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#00B8D4',
    borderRadius: 7,
    marginTop: 15,
  },

  itemsStyle: {
    fontSize: 22,
    color: '#000'
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },

  container: {
    backgroundColor: '#EC4E20',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textoCab: {
    color: '#fff',
    fontSize: 30,
    marginTop: 40
  },
  borda: {
    borderBottomWidth: 2
  },
  botao: {
    backgroundColor: 'orange',
    marginBottom: 5,
  },

});

export default styles;