import React, {useState} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
  TextInput
} from 'react-native';
import styles from '../../styles/usuario/Cadastrar_Usuario'
import Mytextinput from '../../elements/MyTextInput'
import Mybutton from '../../elements/MyButton'

import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'syspet_mob.db' });
const CadastrarUsuario = ({ navigation }) => {
  let [nome, setNome] = useState('');
  let [login, setLogin] = useState('');
  let [senha, setSenha] = useState('');

  let cadastrar_usuario = () => {
    console.log(nome, login, senha);

    if (!nome) {
      alert('Por favor preencha o campo "nome!" ');
      return;
    }
    if (!login) {
      alert('Por favor preencha o campo "login"!');
      return;
    }
    if (!senha) {
      alert('Por favor preencha o campo "senha"!');
      return;
    }

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO usuario (usuario, senha, nome) VALUES (?,?,?)',
        [login, senha, nome],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Sucesso!',
              'Usuário cadastrado com sucesso',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('Home'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Registration Failed');
        }
      );
    });
  };


  return (
    <View style={styles.container_header}>

      <ScrollView keyboardShouldPersistTaps="handled"> 
            <KeyboardAvoidingView 
            behavior ="padding"
            style={{flex: 1, justifyContent: 'space-between'}} >
        
            <Text style={styles.header}>Preencha os campos para cadastrar um novo usuário</Text>


            <Text> Nome de usuário </Text>
            
            <TextInput
              style={styles.barra}
              placeholder="Digite o nome do usuário"
              keyboardType="default"

              onChangeText={
                (nome) => setNome(nome)
              }

            />

        <Text> Email </Text>
            <TextInput
              style={styles.barra}
              placeholder="Digite seu e-mail de acesso"
              keyboardType="email-address"
              onChangeText={
                (login) => setLogin(login)
              }
            />
        <Text> Senha </Text>
            <TextInput
              style={styles.barra}
              secureTextEntry={true}
              placeholder="Digite a senha do usuário"
              onChangeText={
                  (senha) => setSenha(senha)
              }
          
            />

        <Mybutton title="Cadastrar" customClick={cadastrar_usuario} />


        </KeyboardAvoidingView>
      </ScrollView>
      </View>

  )

};

export default CadastrarUsuario;